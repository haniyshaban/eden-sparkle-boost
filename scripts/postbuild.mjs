// Runs after "vite build". GitHub Pages has no server-side routing, so each real page
// gets its own index.html (served with a 200 status) and its own title and link preview.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const SITE = "https://edenlabs.app";
const dist = "dist";
const home = readFileSync(join(dist, "index.html"), "utf8");

const HOME = {
  title: "Eden Labs - Software that grows with your business",
  description:
    "Eden Labs designs and builds web apps, mobile apps and AI tools, and makes GuardSync.",
  url: `${SITE}/`,
  image: `${SITE}/og-image.jpg`,
};

const pages = [
  {
    path: "guardsync",
    title: "GuardSync by Eden Labs - Security guard management",
    description:
      "Run your security team from one place: a web dashboard for admins, and Android apps for guards and field officers. Live locations, face check-in, patrols and SOS alerts.",
    image: `${SITE}/og-guardsync.jpg`,
  },
  {
    path: "guardsync/privacy",
    title: "GuardSync privacy policy - Eden Labs",
    description: "How GuardSync collects, uses and protects personal data.",
    image: `${SITE}/og-guardsync.jpg`,
  },
];

const swap = (html, from, to) => {
  if (!html.includes(from))
    throw new Error(`postbuild: expected to find "${from}" in index.html`);
  return html.split(from).join(to);
};

for (const page of pages) {
  let html = home;
  html = swap(html, HOME.title, page.title);
  html = swap(html, HOME.description, page.description);
  html = swap(html, `content="${HOME.url}"`, `content="${SITE}/${page.path}/"`);
  html = swap(html, HOME.image, page.image);
  const file = join(dist, page.path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`postbuild: wrote ${file}`);
}

// Fallback for any other address: load the app so it can show its own "not found" page.
writeFileSync(join(dist, "404.html"), home);
console.log("postbuild: wrote dist/404.html");
