import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CALENDAR_LINK, EMAIL, usePageTitle } from "@/lib/site";
import { PhoneShowcase, WebShowcase, type Screen } from "@/components/Showcase";

/* ─────────────────────────────── Lightbox ─────────────────────────────── */

const Lightbox = ({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex cursor-zoom-out items-center justify-center bg-ink/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        onClick={onClose}
        className="absolute right-5 top-5 rounded-full bg-paper/10 px-4 py-2 text-sm text-paper transition-colors hover:bg-paper/20"
      >
        Close
      </button>
      <img
        src={src}
        alt={alt}
        className="max-h-[90vh] max-w-full cursor-default rounded-xl object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

/* ─────────────────────────────── helpers ─────────────────────────────── */

const FeatureList = ({ title, items }: { title: string; items: string[] }) => (
  <div className="border-t border-line pt-5">
    <h3 className="font-medium text-ink">{title}</h3>
    <ul className="mt-3 space-y-1.5 text-[15px] leading-snug text-graphite">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const SectionIntro = ({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="max-w-2xl">
    <p className="text-[15px] text-sage">{kicker}</p>
    <h2 className="heading-lg mt-3 text-ink">{title}</h2>
    <p className="mt-5 leading-relaxed text-graphite">{children}</p>
  </div>
);

const IMG = "/images/guardsync";

const ADMIN_SCREENS: Screen[] = [
  {
    title: "Command center",
    desc: "Guards, sites, attendance and alerts at a glance, updated live.",
    src: `${IMG}/admin-1.png`,
  },
  {
    title: "Live map",
    desc: "Every guard and site on one map, with status and movement trails.",
    src: `${IMG}/admin-2.png`,
  },
  {
    title: "Guard management",
    desc: "Search, filter and open any guard's record, shift and clock status.",
    src: `${IMG}/admin-3.png`,
  },
  {
    title: "Sites and geofences",
    desc: "Set up sites, assign guards and set the boundary they work within.",
    src: `${IMG}/admin-4.png`,
  },
];

const GUARD_SCREENS: Screen[] = [
  {
    title: "Home",
    desc: "Today's shift, hours this week and quick actions on one screen.",
    src: `${IMG}/mobile-1.png`,
  },
  {
    title: "Face check-in",
    desc: "A face scan on every clock-in, so nobody can clock in for someone else.",
    src: `${IMG}/mobile-3.png`,
  },
  {
    title: "Patrol mode",
    desc: "A route map with GPS checkpoints, and progress as each point is checked.",
    src: `${IMG}/mobile-6.png`,
  },
  {
    title: "Schedule",
    desc: "Upcoming day and night shifts, with the site for each one.",
    src: `${IMG}/mobile-7.png`,
  },
  {
    title: "Leave",
    desc: "Request leave and follow each request through to approval.",
    src: `${IMG}/mobile-8.png`,
  },
  {
    title: "Profile and payslips",
    desc: "Personal details, documents, schedule and payslips.",
    src: `${IMG}/mobile-2.png`,
  },
];

const OFFICER_SCREENS: Screen[] = [
  {
    title: "Dashboard",
    desc: "Clock in and out, a live work timer, and what is waiting for approval.",
    src: `${IMG}/mobile-4.png`,
  },
  {
    title: "Conveyance approvals",
    desc: "Review guards' requests to leave their post, and approve or deny in one tap.",
    src: `${IMG}/mobile-9.png`,
  },
  {
    title: "Field reports",
    desc: "Record a voice note or video from the site and send it to the office.",
    src: `${IMG}/mobile-5.png`,
  },
];

const VALUE_PROPS = [
  {
    title: "All in one platform",
    desc: "Admin, guard and field officer tools under one roof. One login, the full picture.",
  },
  {
    title: "Face check-in",
    desc: "Facial recognition on every clock-in, so nobody can clock in for someone else.",
  },
  {
    title: "Live GPS tracking",
    desc: "Know where every guard is in real time on a continuously updated map.",
  },
  {
    title: "Wake alerts",
    desc: "Automatic proof-of-life checks for night shift guards, with 120 seconds to respond.",
  },
  {
    title: "SOS in one tap",
    desc: "An instant emergency alert with live GPS location, sent straight to the admin.",
  },
  {
    title: "Field reporting",
    desc: "Voice and video reports from field officers, submitted from where they are.",
  },
];

/* ──────────────────────────────── page ──────────────────────────────── */

const GuardSync = () => {
  usePageTitle("GuardSync by Eden Labs - Security guard management");
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(
    null,
  );

  const open = (src: string, alt: string) => setLightbox({ src, alt });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          onClose={() => setLightbox(null)}
        />
      )}

      <main className="pb-24 pt-32 md:pt-40">
        {/* ── HERO ── */}
        <section className="page grid items-center gap-12 lg:grid-cols-[5fr_7fr]">
          <div>
            <h1 className="heading-xl flex items-center gap-[0.22em] text-ink">
              <img
                src="/images/guardsync/guardsync-mark.svg"
                alt=""
                className="h-[0.82em] w-[0.82em] shrink-0"
              />
              GuardSync
            </h1>
            <p className="mt-3 text-[15px] text-sage">By Eden Labs</p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-graphite md:text-xl">
              Security guard management in three apps: a web dashboard for
              admins, and Android apps for guards and field officers.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={CALENDAR_LINK}
                target="_blank"
                rel="noreferrer"
                className="btn-ink"
              >
                Book a demo
              </a>
              <a
                href={`mailto:${EMAIL}?subject=GuardSync`}
                className="text-link text-[15px] text-ink"
              >
                Email us
              </a>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-3 border-t border-line">
              {[
                { label: "Admins", sub: "Web dashboard" },
                { label: "Guards", sub: "Android app" },
                { label: "Officers", sub: "Android app" },
              ].map((p) => (
                <div key={p.label} className="pt-4">
                  <dt className="font-medium text-ink">{p.label}</dt>
                  <dd className="text-sm text-graphite">{p.sub}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-[1.75rem] bg-tint px-5 py-10 sm:px-8 sm:py-14">
            <img
              src="/images/guardsync/hero-mockup.png"
              alt="GuardSync admin dashboard in a browser window, with the guard and officer apps on two phones"
              className="mx-auto w-full select-none"
            />
          </div>
        </section>

        {/* ── VALUE PROPS ── */}
        <section className="page mt-28">
          <h2 className="heading-lg max-w-xl text-ink">
            Total visibility, no gaps.
          </h2>
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((v) => (
              <div key={v.title} className="border-t border-line pt-5">
                <h3 className="font-medium text-ink">{v.title}</h3>
                <p className="mt-2 leading-relaxed text-graphite">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ADMIN DASHBOARD ── */}
        <section className="page mt-28">
          <SectionIntro
            kicker="Admin dashboard, on the web"
            title="Run your whole operation from one screen."
          >
            Supervisors get live visibility, guard management, attendance
            records, payroll data and emergency alerts, all in one place.
          </SectionIntro>

          <div className="mt-12">
            <WebShowcase
              screens={ADMIN_SCREENS}
              windowTitle="GuardSync Admin"
              onOpen={open}
            />
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureList
              title="Live operations"
              items={[
                "Guard locations on a live map",
                "Clocked in, absent and compliance stats",
                "Average clock-in time",
              ]}
            />
            <FeatureList
              title="Guard management"
              items={[
                "Full profiles with photo, ID and contacts",
                "Document vault (Aadhaar, PAN and more)",
                "Attendance history on a map",
              ]}
            />
            <FeatureList
              title="Sites and shifts"
              items={[
                "Sites with geofence boundaries",
                "Patrol routes with GPS checkpoints",
                "Morning, general and night shifts",
              ]}
            />
            <FeatureList
              title="Attendance"
              items={[
                "Face recognition clock-in and clock-out",
                "Geofence compliance check",
                "Date filters and CSV export",
              ]}
            />
            <FeatureList
              title="Alerts and SOS"
              items={[
                "Real-time SOS feed with GPS",
                "Guard, site and time details",
                "Resolve alerts with notes",
              ]}
            />
            <FeatureList
              title="Leave and payroll"
              items={[
                "Approve or reject leave requests",
                "Date-filtered attendance reports",
                "Daily rate payroll tracking",
              ]}
            />
          </div>
        </section>

        {/* ── GUARD APP ── */}
        <section className="page mt-28">
          <SectionIntro
            kicker="Guard app, on Android"
            title="Everything a guard needs, in their pocket."
          >
            Face check-in, patrol tracking, SOS, leave requests and basic
            offline support, in an app built for security guards.
          </SectionIntro>

          <div className="mt-12">
            <PhoneShowcase
              screens={GUARD_SCREENS}
              appName="Guard app"
              onOpen={open}
            />
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureList
              title="Login and face enrolment"
              items={[
                "Employee login",
                "One-time face registration",
                "Face check-in and check-out",
                "Live shift timer",
              ]}
            />
            <FeatureList
              title="Transport mode"
              items={[
                "Switch to commute or transport mode",
                "Submit conveyance requests",
                "Track approval status",
                "Cancel pending requests",
              ]}
            />
            <FeatureList
              title="Wake alerts"
              items={[
                "Regular proof-of-life checks",
                "120 second face re-check window",
                "Missed checks logged for supervisors",
              ]}
            />
            <FeatureList
              title="Patrol mode"
              items={[
                "Route map with live position",
                "Automatic GPS checkpoints",
                "Progress and timestamps",
                "Map and list views",
              ]}
            />
            <FeatureList
              title="SOS and leave"
              items={[
                "One-tap SOS with live GPS",
                "Leave requests and status",
                "Profile, schedule and payslips",
                "Basic offline support",
              ]}
            />
          </div>
        </section>

        {/* ── OFFICER APP ── */}
        <section className="page mt-28">
          <SectionIntro
            kicker="Field officer app, on Android"
            title="Tools for officers on the ground."
          >
            Field officers clock in, approve conveyance requests and send audio
            or video reports straight from the site.
          </SectionIntro>

          <div className="mt-12">
            <PhoneShowcase
              screens={OFFICER_SCREENS}
              appName="Officer app"
              onOpen={open}
              flip
            />
          </div>

          <div className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureList
              title="Dashboard"
              items={[
                "Clock in and out by shift type",
                "Live work timer",
                "Sites visited and pending",
              ]}
            />
            <FeatureList
              title="Conveyance approvals"
              items={[
                "Review guard conveyance requests",
                "Approve or reject in one tap",
              ]}
            />
            <FeatureList
              title="Field reporting"
              items={[
                "Record audio and video in the app",
                "Add a title and notes",
                "Upload progress",
                "Full submission history",
              ]}
            />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="page mt-28">
          <div className="rounded-[1.75rem] bg-tint px-8 py-14 sm:px-14 md:py-20">
            <h2 className="heading-lg max-w-xl text-ink">
              See GuardSync in action.
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-graphite">
              Book a demo and we'll walk you through the dashboard and both
              apps.
            </p>
            <a
              href={CALENDAR_LINK}
              target="_blank"
              rel="noreferrer"
              className="btn-ink mt-9"
            >
              Book a demo
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GuardSync;
