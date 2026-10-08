const reasons = [
  {
    title: "Lower cost",
    description:
      "Enterprise-grade software without the enterprise price. You get a clear quote before any work starts.",
  },
  {
    title: "Training included",
    description: "We train your team on what we build, so the software actually gets used.",
  },
  {
    title: "Support that stays",
    description: "We stay on after launch to fix issues, answer questions and add improvements.",
  },
];

export const WhySection = () => {
  return (
    <section id="why" className="scroll-mt-20">
      <div className="page">
        <div className="border-t border-line py-20 md:py-28">
          <h2 className="heading-lg max-w-2xl text-ink">Big-vendor quality, without the big-vendor bill.</h2>

          <ul className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-3">
            {reasons.map((reason) => (
              <li key={reason.title} className="border-t border-ink pt-6">
                <h3 className="text-xl font-medium text-ink">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-graphite">{reason.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
