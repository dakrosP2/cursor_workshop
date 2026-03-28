import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { CtaSection } from "@/components/CtaSection";
import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteHeader } from "@/components/SiteHeader";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-stone-50">
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProcessSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <ContactSection />
        <FooterSection />
      </main>
    </div>
  );
}
