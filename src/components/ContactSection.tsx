import { CALENDAR_LINK, EMAIL, PHONE_DISPLAY, PHONE_LINK } from "@/lib/site";

export const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-20 bg-ink text-paper">
      <div className="page grid gap-14 pb-20 pt-20 md:grid-cols-12 md:pb-24 md:pt-28">
        <div className="md:col-span-7">
          <h2 className="heading-lg max-w-xl">Tell us what you're working on.</h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-paper/70">
            Book a call to talk it through, or write to us directly.
          </p>
          <a href={CALENDAR_LINK} target="_blank" rel="noreferrer" className="btn-paper mt-10">
            Book a call
          </a>
        </div>

        <dl className="self-end border-t border-paper/15 md:col-span-5">
          <div className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-5">
            <dt className="text-paper/60">Email</dt>
            <dd>
              <a href={`mailto:${EMAIL}`} className="text-link">
                {EMAIL}
              </a>
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-6 border-b border-paper/15 py-5">
            <dt className="text-paper/60">Phone</dt>
            <dd>
              <a href={PHONE_LINK} className="text-link">
                {PHONE_DISPLAY}
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};
