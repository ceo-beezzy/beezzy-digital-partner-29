import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PillarsSection from "@/components/PillarsSection";
import CaseSuccessSection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HexagonPattern from "@/components/HexagonPattern";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <HexagonPattern />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PillarsSection />
      <CaseSuccessSection />
      <Footer />
    </main>
  );
};

export default Index;
