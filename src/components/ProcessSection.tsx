import { useState } from "react";
import { Search, Lightbulb, Code, Rocket, CheckCircle } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    subtitle: "Understanding Your Vision",
    description: "We start by deeply understanding your business goals, challenges, and requirements. Through comprehensive analysis and stakeholder interviews, we craft a strategic roadmap tailored to your unique needs.",
    details: [
      "Stakeholder workshops and interviews",
      "Technical requirements analysis", 
      "Competitive landscape research",
      "Strategic roadmap development"
    ],
    duration: "1-2 weeks"
  },
  {
    icon: Lightbulb,
    title: "Design & Planning", 
    subtitle: "Architecting Solutions",
    description: "Our team designs scalable solutions with user experience at the forefront. We create detailed technical specifications and interactive prototypes to validate concepts before development.",
    details: [
      "System architecture design",
      "User experience wireframing",
      "Technical specification documentation",
      "Interactive prototype development"
    ],
    duration: "2-3 weeks"
  },
  {
    icon: Code,
    title: "Development & Testing",
    subtitle: "Building Excellence",
    description: "Using agile methodologies and cutting-edge technologies, we build robust solutions with continuous testing and quality assurance integrated throughout the development cycle.",
    details: [
      "Agile development sprints",
      "Continuous integration/deployment",
      "Automated testing suites",
      "Performance optimization"
    ],
    duration: "4-12 weeks"
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    subtitle: "Going Live",
    description: "We ensure smooth deployment with comprehensive testing, monitoring setup, and team training. Our deployment process minimizes downtime and maximizes performance from day one.",
    details: [
      "Production environment setup",
      "Performance monitoring implementation",
      "Team training and documentation",
      "Go-live support and validation"
    ],
    duration: "1-2 weeks"
  },
  {
    icon: CheckCircle,
    title: "Support & Evolution",
    subtitle: "Continuous Growth",
    description: "Post-launch, we provide ongoing support, monitoring, and continuous improvement. We help your solution evolve with your business needs and emerging technologies.",
    details: [
      "24/7 monitoring and support",
      "Regular performance optimization",
      "Feature enhancements and updates", 
      "Scaling and infrastructure management"
    ],
    duration: "Ongoing"
  }
];

export const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-nav mb-6">
            <span className="text-primary text-sm font-medium">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            From Concept to <span className="gradient-text">Reality</span>
          </h2>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Our proven 5-step methodology ensures successful project delivery with transparency and collaboration at every stage
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Timeline Line */}
            <div className="relative">
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-glass-border" />
              <div 
                className="absolute top-8 left-0 h-0.5 bg-gradient-primary transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / processSteps.length) * 100}%` }}
              />
            </div>

            {/* Step Indicators */}
            <div className="flex justify-between relative mb-12">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center cursor-pointer group transition-all duration-300 ${
                    index <= activeStep ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300 ${
                    index === activeStep 
                      ? "bg-gradient-primary shadow-glow scale-110" 
                      : index < activeStep
                      ? "bg-primary"
                      : "glass border-2 border-glass-border group-hover:border-primary/50"
                  }`}>
                    <step.icon className={`w-8 h-8 ${
                      index <= activeStep ? "text-white" : "text-foreground-muted"
                    }`} />
                  </div>
                  <div className="text-center">
                    <div className={`font-semibold text-sm mb-1 ${
                      index === activeStep ? "text-primary" : "text-foreground-muted"
                    }`}>
                      Step {index + 1}
                    </div>
                    <div className="text-xs text-foreground-muted">
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step Content */}
          <div className="glass-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                    {(() => {
                      const Icon = processSteps[activeStep].icon;
                      return <Icon className="w-6 h-6 text-white" />;
                    })()}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{processSteps[activeStep].title}</h3>
                    <p className="text-primary text-sm">{processSteps[activeStep].subtitle}</p>
                  </div>
                </div>

                <p className="text-foreground-muted mb-8 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div>
                  <h4 className="font-semibold mb-4">Key Activities:</h4>
                  <ul className="space-y-3">
                    {processSteps[activeStep].details.map((detail, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-foreground-muted">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mobile Step Navigation */}
              <div className="lg:hidden order-first">
                <div className="flex overflow-x-auto pb-4 gap-4">
                  {processSteps.map((step, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`min-w-0 flex-shrink-0 p-3 rounded-xl border transition-all ${
                        index === activeStep
                          ? "border-primary bg-primary/10"
                          : "border-glass-border hover:border-primary/50"
                      }`}
                    >
                      <step.icon className={`w-6 h-6 ${
                        index === activeStep ? "text-primary" : "text-foreground-muted"
                      }`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Element */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="glass rounded-2xl p-8 text-center">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                      {(() => {
                        const Icon = processSteps[activeStep].icon;
                        return <Icon className="w-12 h-12 text-white" />;
                      })()}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{processSteps[activeStep].title}</h4>
                    <p className="text-sm text-foreground-muted mb-4">{processSteps[activeStep].subtitle}</p>
                    <div className="text-xs text-primary font-medium">{processSteps[activeStep].duration}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center mt-8 pt-8 border-t border-glass-border">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="glass-nav disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              
              <div className="flex gap-2">
                {processSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeStep ? "bg-primary w-8" : "bg-glass-border"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveStep(Math.min(processSteps.length - 1, activeStep + 1))}
                disabled={activeStep === processSteps.length - 1}
                className="glass-nav disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};