import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    Services: [
      "AI Integration",
      "Digital Strategy", 
      "Performance Optimization",
      "Security & Compliance",
      "Data Analytics",
      "Cloud Solutions"
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Case Studies",
      "Blog",
      "Press Kit"
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Help Center",
      "Community",
      "Webinars",
      "White Papers"
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Security",
      "SLA"
    ]
  };

  return (
    <footer className="relative bg-background-secondary border-t border-glass-border">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-glow rounded-full blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl">E</span>
                </div>
                <span className="text-2xl font-bold gradient-text">Eden Labs</span>
              </div>
              
              <p className="text-foreground-muted mb-6 leading-relaxed">
                Pioneering the future of technology with AI-powered solutions that transform businesses and drive innovation across industries.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 glass-nav rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                  <Github className="w-5 h-5 text-foreground-muted group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 glass-nav rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                  <Linkedin className="w-5 h-5 text-foreground-muted group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 glass-nav rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-foreground-muted group-hover:text-primary" />
                </a>
                <a href="#" className="w-10 h-10 glass-nav rounded-full flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 group">
                  <Mail className="w-5 h-5 text-foreground-muted group-hover:text-primary" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="font-semibold text-lg mb-4">{category}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a 
                        href="#" 
                        className="text-foreground-muted hover:text-primary transition-colors duration-300 text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-glass-border">
          <div className="glass-card max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
            <p className="text-foreground-muted mb-6">
              Get the latest insights on AI, technology trends, and industry innovations delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 glass rounded-lg px-4 py-3 bg-background-secondary/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
              />
              <Button variant="glass-primary" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between">
          <div className="text-foreground-muted text-sm mb-4 md:mb-0">
            © 2024 Eden Labs. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-foreground-muted hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground-muted hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
            
            {/* Scroll to Top Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="hover:bg-primary/20 hover:text-primary"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};