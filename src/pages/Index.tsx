import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PillarsSection from "@/components/PillarsSection";
import VennDiagramSection from "@/components/VennDiagramSection";
import CaseSuccessSection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <PillarsSection />
      <VennDiagramSection />
      <CaseSuccessSection />
      <Footer />
    </main>
  );
};

export default Index;
