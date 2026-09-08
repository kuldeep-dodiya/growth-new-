import Header from "@/components/sections/Header";
import HeroScroll from "@/components/sections/HeroScroll";
import TrustStrip from "@/components/sections/TrustStrip";
import Introduction from "@/components/sections/Introduction";
import GrowthSystem from "@/components/sections/GrowthSystem";
import Services from "@/components/sections/Services";
import CreativeShowcase from "@/components/sections/CreativeShowcase";
import WebsiteShowcase from "@/components/sections/WebsiteShowcase";
import CaseStudies from "@/components/sections/CaseStudies";
import PerformanceResults from "@/components/sections/PerformanceResults";
import Industries from "@/components/sections/Industries";
import Process from "@/components/sections/Process";
import WhyGrowthBridge from "@/components/sections/WhyGrowthBridge";
import Founder from "@/components/sections/Founder";
import Testimonials from "@/components/sections/Testimonials";
import Platforms from "@/components/sections/Platforms";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-background">
      {/* 01 — Fixed Navigation */}
      <Header />

      {/* 02 — Cinematic Hero (canvas scroll sequence) */}
      <HeroScroll />

      {/* 03 — Trust / Proof Strip */}
      <TrustStrip />

      {/* 04 — Growth Bridge Introduction */}
      <Introduction />

      {/* 05 — Growth System Pipeline */}
      <GrowthSystem />

      {/* 06 — Services */}
      <Services />

      {/* 07 — Creative Showcase */}
      <CreativeShowcase />

      {/* 08 — Website Showcase */}
      <WebsiteShowcase />

      {/* 09 — Case Studies */}
      <CaseStudies />

      {/* 10 — Performance Results */}
      <PerformanceResults />

      {/* 11 — Industries / Who We Help */}
      <Industries />

      {/* 12 — Process */}
      <Process />

      {/* 13 — Why Growth Bridge */}
      <WhyGrowthBridge />

      {/* 14 — Founder */}
      <Founder />

      {/* 15 — Testimonials */}
      <Testimonials />

      {/* 16 — Platforms & Tools */}
      <Platforms />

      {/* 17 — FAQ */}
      <FAQ />

      {/* 18 — Final CTA */}
      <FinalCTA />

      {/* 19 — Contact Form */}
      <Contact />

      {/* 20 — Footer */}
      <Footer />
    </main>
  );
}
