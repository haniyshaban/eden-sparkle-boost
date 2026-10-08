const steps = [
  {
    title: "Understand",
    time: "1-2 weeks",
    description: "We learn how your business runs today and agree on what to build first.",
  },
  {
    title: "Design",
    time: "2-3 weeks",
    description:
      "We plan the system and show you screens and a clickable prototype before any code is written.",
  },
  {
    title: "Build",
    time: "4-12 weeks",
    description: "We build and test in short cycles, so you see working software early and often.",
  },
  {
    title: "Launch and support",
    time: "Ongoing",
    description: "We launch, train your team and stay on to fix issues and add improvements.",
  },
];

export const ProcessSection = () => {
  return (
    <section id="process" className="scroll-mt-20">
      <div className="page">
        <div className="border-t border-line py-20 md:py-28">
          <h2 className="heading-lg text-ink">How we work</h2>

          <ol className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li key={step.title} className="border-t border-ink pt-6">
                <span className="block text-5xl font-light leading-none text-sage" aria-hidden="true">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-medium text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-graphite">{step.time}</p>
                <p className="mt-4 leading-relaxed text-graphite">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
