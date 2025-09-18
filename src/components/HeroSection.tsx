import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FloatingParticles } from "./FloatingParticles";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const words = ["Digital Future", "AI Revolution", "Tech Innovation"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/90 to-background" />
        
        {/* Interactive gradient that follows mouse */}
        <div 
          className="absolute w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-30 transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 glass-nav mb-8 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground-muted">
            Pioneering the Future of Technology
          </span>
        </div>

        {/* Main Heading with Morphing Text */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 animate-fade-in-up animate-delay-200">
          Navigate the{" "}
          <span className="gradient-text inline-block transition-all duration-500">
            {words[currentWordIndex]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground-muted mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
          Thrive in the Age of AI with cutting-edge solutions that transform your business. 
          We craft digital experiences that drive real value and scale with your ambitions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up animate-delay-400">
          <Button 
            variant="hero" 
            size="xl" 
            className="group"
          >
            Explore Our Solutions
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="glass" 
            size="xl"
            className="group"
          >
            Watch Demo
            <div className="ml-2 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
              <div className="w-0 h-0 border-l-[6px] border-l-primary border-y-[3px] border-y-transparent ml-0.5" />
            </div>
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 animate-fade-in-up animate-delay-500">
          <div className="glass-card text-center float">
            <div className="text-3xl font-bold gradient-text mb-2">15+</div>
            <div className="text-foreground-muted">Projects Delivered</div>
          </div>
          <div className="glass-card text-center float-delayed">
            <div className="text-3xl font-bold gradient-text mb-2">100%</div>
            <div className="text-foreground-muted">Client Satisfaction</div>
          </div>
          <div className="glass-card text-center float">
            <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
            <div className="text-foreground-muted">Support Coverage</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};