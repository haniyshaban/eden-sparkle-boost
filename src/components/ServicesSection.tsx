import { useState } from "react";
import { Bot, Rocket, Zap, Shield, BarChart3, Cloud, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Integration",
    description: "Transform your business processes with intelligent automation and machine learning solutions tailored to your industry.",
    features: ["Machine Learning Models", "Process Automation", "Intelligent Analytics", "Custom AI Solutions"],
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: Rocket,
    title: "Digital Strategy", 
    description: "Navigate digital transformation with strategic planning that aligns technology with your business objectives.",
    features: ["Digital Roadmaps", "Technology Consulting", "Innovation Strategy", "Market Analysis"],
    color: "from-blue-500 to-cyan-600"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Accelerate your systems and processes with cutting-edge optimization techniques and advanced analytics.",
    features: ["System Performance", "Code Optimization", "Database Tuning", "Infrastructure Scaling"],
    color: "from-yellow-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your digital assets with comprehensive security frameworks and regulatory compliance solutions.", 
    features: ["Security Audits", "Compliance Management", "Risk Assessment", "Data Protection"],
    color: "from-red-500 to-pink-600"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Unlock actionable insights from your data with advanced analytics and business intelligence solutions.",
    features: ["Business Intelligence", "Predictive Analytics", "Data Visualization", "Real-time Dashboards"],
    color: "from-purple-500 to-violet-600"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scale seamlessly with cloud-native architectures and migration strategies designed for modern businesses.",
    features: ["Cloud Migration", "Serverless Architecture", "Container Orchestration", "Multi-cloud Strategy"],
    color: "from-indigo-500 to-blue-600"
  }
];

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-nav mb-6">
            <span className="text-primary text-sm font-medium">Our Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Transformative <span className="gradient-text">Solutions</span>
          </h2>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            We combine deep technical knowledge with strategic thinking to deliver solutions that scale with your ambitions
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group interactive-card relative overflow-hidden transition-all duration-500 ${
                hoveredIndex === index ? "scale-105 z-10" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-foreground-muted mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-foreground-muted group-hover:text-foreground transition-colors"
                      style={{ animationDelay: `${featureIndex * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <div className="flex items-center text-primary group-hover:text-primary-glow cursor-pointer transition-colors">
                  <span className="text-sm font-medium mr-2">Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="glass-card inline-block">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-foreground-muted mb-6">
              Let's discuss how our expertise can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-nav hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 px-6 py-3">
                Schedule Consultation
              </button>
              <button className="glass-nav hover:bg-secondary/20 transition-all duration-300 px-6 py-3">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};