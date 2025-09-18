import { useState, useEffect, useRef } from "react";

const stats = [
  { number: 15, suffix: "+", label: "Projects Delivered", description: "Successfully completed across industries" },
  { number: 100, suffix: "%", label: "Client Satisfaction", description: "Consistent 5-star ratings and referrals" },
  { number: 24, suffix: "/7", label: "Support Coverage", description: "Round-the-clock technical assistance" },
  { number: 5, suffix: "+", label: "Years Experience", description: "Deep expertise in emerging technologies" },
];

const AnimatedCounter = ({ 
  target, 
  suffix, 
  isVisible 
}: { 
  target: number; 
  suffix: string; 
  isVisible: boolean; 
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-4xl md:text-6xl font-black gradient-text">
      {count}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-nav mb-6">
            <span className="text-primary text-sm font-medium">Why Choose Eden Labs</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Proven Track Record of <span className="gradient-text">Excellence</span>
          </h2>
          
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Our numbers speak for themselves - delivering consistent results that drive business growth
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="glass-card hover:bg-primary/5 hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                {/* Animated Number */}
                <div className="mb-4">
                  <AnimatedCounter 
                    target={stat.number} 
                    suffix={stat.suffix} 
                    isVisible={isVisible}
                  />
                </div>

                {/* Label */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-foreground-muted text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative Line */}
                <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-primary rounded-full opacity-50 group-hover:opacity-100 group-hover:w-16 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Highlights */}
        <div className="mt-20 glass-card max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Recent Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground-muted">ISO 27001 Certified</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground-muted">AWS Partner Network</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-foreground-muted">Microsoft Gold Partner</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};