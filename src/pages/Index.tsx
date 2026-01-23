import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TransitionStatsSection from "@/components/TransitionStatsSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import PillarsSection from "@/components/PillarsSection";
import VennDiagramSection from "@/components/VennDiagramSection";
import CaseSuccessSection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <TransitionStatsSection />
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
