const services = [
  {
    title: "Web and mobile apps",
    description:
      "Dashboards, customer portals, internal tools and Android apps, built around how your team already works.",
  },
  {
    title: "AI and automation",
    description:
      "Practical AI that saves time: reading documents, answering routine questions and taking repetitive steps out of your workflow.",
  },
  {
    title: "Cloud and integrations",
    description:
      "We connect the tools you already use, move you onto reliable cloud hosting and keep everything running smoothly.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="scroll-mt-20">
      <div className="page">
        <div className="grid gap-10 border-t border-line py-20 md:grid-cols-12 md:py-28">
          <h2 className="heading-lg text-ink md:col-span-4">What we build</h2>

          <ul className="md:col-span-8">
            {services.map((service) => (
              <li
                key={service.title}
                className="grid gap-2 border-b border-line py-8 first:pt-0 sm:grid-cols-[15rem_1fr] sm:gap-10 md:first:pt-2"
              >
                <h3 className="text-xl font-medium text-ink">{service.title}</h3>
                <p className="max-w-[34rem] leading-relaxed text-graphite">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
