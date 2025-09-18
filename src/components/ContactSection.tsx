import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Calendar, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass-nav mb-6">
            <span className="text-primary text-sm font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Ready to Start Your <span className="gradient-text">Journey</span>?
          </h2>
          
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Let's discuss how we can transform your business with cutting-edge technology solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <p className="text-foreground-muted text-sm mb-2">Get in touch via email</p>
                    <a href="mailto:hello@edenlabs.app" className="text-primary hover:text-primary-glow transition-colors">
                      hello@edenlabs.app
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <p className="text-foreground-muted text-sm mb-2">Speak with our team</p>
                    <a href="tel:+1234567890" className="text-primary hover:text-primary-glow transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Visit Us</h4>
                    <p className="text-foreground-muted text-sm mb-2">Our headquarters</p>
                    <p className="text-primary">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card">
              <h4 className="font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="glass" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
                <Button variant="glass" className="w-full justify-start">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Live Chat
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-card">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full glass rounded-lg px-4 py-3 bg-background-secondary/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full glass rounded-lg px-4 py-3 bg-background-secondary/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full glass rounded-lg px-4 py-3 bg-background-secondary/50 border border-glass-border focus:border-primary focus:outline-none transition-colors"
                    placeholder="Your company name (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full glass rounded-lg px-4 py-3 bg-background-secondary/50 border border-glass-border focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and how we can help..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full md:w-auto"
                >
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 glass-card max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold mb-2">How long does a typical project take?</h4>
              <p className="text-sm text-foreground-muted">Project timelines vary based on complexity, but most projects range from 6-16 weeks from discovery to deployment.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Do you provide ongoing support?</h4>
              <p className="text-sm text-foreground-muted">Yes, we offer 24/7 monitoring, maintenance, and support packages to ensure your solution continues to perform optimally.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">What industries do you serve?</h4>
              <p className="text-sm text-foreground-muted">We work with clients across healthcare, finance, e-commerce, manufacturing, and emerging technology sectors.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Can you work with our existing team?</h4>
              <p className="text-sm text-foreground-muted">Absolutely! We integrate seamlessly with your existing teams and processes to enhance your capabilities.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};