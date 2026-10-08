import { Link } from "react-router-dom";

export const GuardSyncFeature = () => {
  return (
    <section id="work" className="scroll-mt-20 pb-20 md:pb-28">
      <div className="page">
        <div className="grid items-center overflow-hidden rounded-[1.75rem] bg-tint md:grid-cols-2">
          <div className="p-8 sm:p-12 md:p-14">
            <h2 className="heading-lg text-ink">We built GuardSync</h2>
            <p className="mt-6 max-w-md leading-relaxed text-graphite">
              GuardSync is our own guard management app for security companies. Attendance, live guard
              location, patrols, payroll data and SOS alerts sit in one place, with a web dashboard for admins
              and Android apps for guards and field officers.
            </p>
            <Link to="/guardsync" className="btn-outline mt-9">
              See GuardSync
            </Link>
          </div>
          <div className="px-6 pb-10 sm:px-12 md:py-12 md:pl-0 md:pr-10">
            <img
              src="/images/guardsync/hero-mockup.webp"
              alt="GuardSync admin dashboard in a browser window, with the guard and officer apps on two phones"
              width={1400}
              height={1079}
              className="mx-auto w-full max-w-lg"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
