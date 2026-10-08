import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GuardSyncFeature } from "@/components/GuardSyncFeature";
import { WhySection } from "@/components/WhySection";
import { ProcessSection } from "@/components/ProcessSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { usePageTitle } from "@/lib/site";

const Index = () => {
  usePageTitle("Eden Labs - Custom software development and AI deployment");

  // When arriving from another page via a link like /#services, scroll to that section
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (target) setTimeout(() => target.scrollIntoView(), 50);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhySection />
        <ProcessSection />
        <GuardSyncFeature />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
