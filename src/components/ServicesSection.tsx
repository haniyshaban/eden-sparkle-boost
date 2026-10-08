import { AppWindow, Compass, Sparkles, Workflow, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Short examples of the work, shown as small labels */
  examples: string[];
};

const services: Service[] = [
  {
    icon: AppWindow,
    title: "Custom software development",
    description:
      "Web apps, mobile apps, dashboards and internal tools, built around how your team already works.",
    examples: ["Web apps", "Mobile apps", "Dashboards", "Internal tools"],
  },
  {
    icon: Sparkles,
    title: "AI deployment",
    description:
      "Practical AI put to work in your business: reading documents, answering routine questions and taking repetitive steps out of your day.",
    examples: ["Document reading", "Assistants", "Automation"],
  },
  {
    icon: Compass,
    title: "IT and AI consulting",
    description:
      "Plain advice on what to build, what to buy and what to automate, with a plan your team can act on.",
    examples: ["Technology review", "Build or buy", "Roadmap"],
  },
  {
    icon: Workflow,
    title: "Digital transformation",
    description:
      "Move from paper, spreadsheets and scattered tools to one connected system, on reliable cloud hosting.",
    examples: ["Paper to digital", "Cloud hosting", "Integrations"],
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="page">
        <div className="border-t border-line py-20 md:py-28">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2 className="heading-lg text-ink md:col-span-5">What we do</h2>
            <p className="max-w-xl leading-relaxed text-graphite md:col-span-7">
              One team for the whole job: working out what you need, building it, putting AI where it
              helps, and moving your business onto it.
            </p>
          </div>

          <ul className="mt-14 grid gap-5 sm:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service.title}
                className="group relative flex flex-col rounded-[1.75rem] border border-line bg-surface p-8 transition-colors duration-300 hover:border-ink/40 sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-tint text-sage transition-colors duration-300 group-hover:bg-sage group-hover:text-paper">
                    <service.icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-graphite" aria-hidden="true">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-medium tracking-tight text-ink">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{service.description}</p>

                <ul className="mt-8 flex flex-wrap gap-2 pt-2">
                  {service.examples.map((example) => (
                    <li key={example} className="rounded-full bg-tint px-3.5 py-1.5 text-sm text-ink">
                      {example}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
