// Runs after the two "vite build" steps (browser bundle, then the build-time renderer).
// GitHub Pages has no server, so each real page becomes its own index.html that already
// contains the page's text, title, link preview, preferred address and structured data.
// Also writes sitemap.xml and the fallback 404.html.
import { mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

// Render with the production build of React, the same one the browser bundle uses
process.env.NODE_ENV = "production";

const SITE = "https://edenlabs.app";
const dist = "dist";
const template = readFileSync(join(dist, "index.html"), "utf8");
const { render } = await import(pathToFileURL(resolve("dist-ssr/entry-server.js")).href);

const HOME = {
  title: "Eden Labs - Software that grows with your business",
  description: "Eden Labs designs and builds web apps, mobile apps and AI tools, and makes GuardSync.",
  image: `${SITE}/og-image.jpg`,
};

const organization = {
  "@type": "Organization",
  "@id": `${SITE}/#organization`,
  name: "Eden Labs",
  url: `${SITE}/`,
  logo: `${SITE}/apple-touch-icon.png`,
  email: "hello@edenlabs.app",
  sameAs: ["https://www.linkedin.com/company/eden-labs-co/"],
};

const pages = [
  {
    route: "/",
    file: "index.html",
    ...HOME,
    priority: "1.0",
    data: [
      organization,
      {
        "@type": "WebSite",
        "@id": `${SITE}/#website`,
        name: "Eden Labs",
        url: `${SITE}/`,
        publisher: { "@id": organization["@id"] },
      },
    ],
  },
  {
    route: "/guardsync",
    file: "guardsync/index.html",
    title: "GuardSync by Eden Labs - Security guard management",
    description:
      "Run your security team from one place: a web dashboard for admins, and Android apps for guards and field officers. Live locations, face check-in, patrols and SOS alerts.",
    image: `${SITE}/og-guardsync.jpg`,
    priority: "0.9",
    // The largest thing on screen when this page opens: start downloading it straight away
    preloadImage: "/images/guardsync/hero-mockup.webp",
    data: [
      organization,
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE}/guardsync/#software`,
        name: "GuardSync",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web, Android",
        description:
          "Security guard management in three apps: a web dashboard for admins, and Android apps for guards and field officers. Live locations, face check-in, patrols, SOS alerts and reports in one place.",
        url: `${SITE}/guardsync/`,
        image: `${SITE}/og-guardsync.jpg`,
        publisher: { "@id": organization["@id"] },
      },
    ],
  },
  {
    route: "/guardsync/privacy",
    file: "guardsync/privacy/index.html",
    title: "GuardSync privacy policy - Eden Labs",
    description: "How GuardSync collects, uses and protects personal data.",
    image: `${SITE}/og-guardsync.jpg`,
    priority: "0.3",
    data: [],
  },
];

const swap = (html, from, to) => {
  if (!html.includes(from)) throw new Error(`postbuild: expected to find "${from}" in index.html`);
  return html.split(from).join(to);
};

const address = (page) => `${SITE}${page.route === "/" ? "/" : `${page.route}/`}`;

// The site's own font file: preload it so text draws in the right typeface first time
const fontFile = readdirSync(join(dist, "assets")).find((f) =>
  /^hanken-grotesk-latin-wght-normal.*\.woff2$/.test(f),
);
if (!fontFile) throw new Error("postbuild: the Hanken Grotesk font file was not found in dist/assets");

for (const page of pages) {
  const body = render(page.route);
  if (body.length < 500) throw new Error(`postbuild: ${page.route} rendered almost nothing`);

  let html = template;
  html = swap(html, HOME.title, page.title);
  html = swap(html, HOME.description, page.description);
  html = swap(html, `content="${SITE}/"`, `content="${address(page)}"`);
  html = swap(html, HOME.image, page.image);

  const head = [
    `<link rel="canonical" href="${address(page)}" />`,
    `<link rel="preload" href="/assets/${fontFile}" as="font" type="font/woff2" crossorigin />`,
    page.preloadImage
      ? `<link rel="preload" href="${page.preloadImage}" as="image" fetchpriority="high" />`
      : "",
    page.data.length
      ? `<script type="application/ld+json">${JSON.stringify({ "@context": "https://schema.org", "@graph": page.data })}</script>`
      : "",
  ]
    .filter(Boolean)
    .join("\n    ");
  html = swap(html, "</head>", `  ${head}\n  </head>`);
  html = swap(html, '<div id="root"></div>', `<div id="root">${body}</div>`);

  const file = join(dist, page.file);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`postbuild: wrote ${file} (${Math.round(body.length / 1024)} KB of page content)`);
}

// Fallback for any other address: an empty shell, so the app can show its own "not found" page.
writeFileSync(join(dist, "404.html"), template);

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages
    .map(
      (p) =>
        `  <url>\n    <loc>${address(p)}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${p.priority}</priority>\n  </url>`,
    )
    .join("\n")}\n</urlset>\n`,
);
console.log("postbuild: wrote dist/404.html and dist/sitemap.xml");

// The renderer bundle is only needed during the build
rmSync("dist-ssr", { recursive: true, force: true });
