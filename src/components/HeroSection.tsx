import { EdenMark } from "@/components/EdenMark";
import { CALENDAR_LINK, EMAIL } from "@/lib/site";

export const HeroSection = () => {
  return (
    <section id="home" className="overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div className="page grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="heading-xl text-ink">Software that grows with your business.</h1>
          <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-graphite md:text-xl">
            Eden Labs designs and builds web apps, mobile apps and AI tools.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a href={CALENDAR_LINK} target="_blank" rel="noreferrer" className="btn-ink">
              Book a call
            </a>
            <a href={`mailto:${EMAIL}`} className="text-link text-[15px] text-ink">
              {EMAIL}
            </a>
          </div>
        </div>

        <div className="flex justify-center md:col-span-5 md:justify-end">
          <EdenMark
            fine
            className="eden-grow h-60 w-60 text-sage sm:h-72 sm:w-72 md:h-[25rem] md:w-[25rem]"
          />
        </div>
      </div>
    </section>
  );
};
