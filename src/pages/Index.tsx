import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PillarsSection from "@/components/PillarsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PillarsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
