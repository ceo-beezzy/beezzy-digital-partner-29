import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import beezzyLogo from "@/assets/beezzy-logo.png";
import HexagonPattern from "@/components/HexagonPattern";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hexagon Pattern */}
      <HexagonPattern />
      
      {/* Background with Brand Pillars Pattern */}
      <div className="absolute inset-0 bg-gradient-hero">
        {/* Animated Brand Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Be Easy - Floating geometric shapes */}
          <div className="absolute top-20 left-10 space-y-4 animate-pulse">
            <div className="w-16 h-4 bg-white/20 rounded-full transform rotate-12" />
            <div className="w-12 h-4 bg-white/15 rounded-full transform -rotate-6" />
            <div className="w-20 h-4 bg-white/10 rounded-full transform rotate-3" />
          </div>
          
          {/* Be Fast - Speed lines */}
          <div className="absolute top-1/3 right-16 space-y-2 animate-pulse" style={{
          animationDelay: '1s'
        }}>
            {Array.from({
            length: 6
          }).map((_, i) => <div key={i} className="h-1 bg-white/20 rounded-full transform -skew-x-12" style={{
            width: `${60 - i * 8}px`,
            animationDelay: `${i * 0.1}s`
          }} />)}
          </div>
          
          {/* Be Customer Centric - Concentric circles */}
          <div className="absolute bottom-32 left-1/4 animate-pulse" style={{
          animationDelay: '2s'
        }}>
            <div className="w-24 h-24 border-2 border-white/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/15 rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-white/20 rounded-full" />
              </div>
            </div>
          </div>
          
          {/* Additional floating elements */}
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-bounce" style={{
          animationDuration: '8s'
        }} />
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" style={{
          animationDuration: '4s'
        }} />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
          backgroundSize: '50px 50px'
        }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-brand-cream">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 flex items-center justify-center gap-3">
            
            <h1 className="text-4xl font-bold font-montserrat tracking-tight mx-0 md:text-9xl">
              Beezzy
            </h1>
          </div>

          {/* Three Pillars Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-8 text-brand-accent">
              Nossos Pilares
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Be Easy */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-brand-accent rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-2">Be Easy</h3>
                <p className="text-sm font-light opacity-80">Simplicidade em cada solução</p>
              </div>

              {/* Be Fast */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-8 h-2 bg-brand-accent rounded-full transform -skew-x-12"></div>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-2">Be Fast</h3>
                <p className="text-sm font-light opacity-80">Agilidade que gera resultados</p>
              </div>

              {/* Be Customer Centric */}
              <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-brand-accent rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-brand-accent rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-white mb-2">Be Customer Centric</h3>
                <p className="text-sm font-light opacity-80">Foco total no cliente</p>
              </div>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="mt-16 text-center">
            <p className="text-sm font-montserrat opacity-70 mb-2">Mais de 350 empresas transformadas há mais de 5 anos</p>
            <div className="flex justify-center items-center gap-8 text-sm opacity-60">
              <span>Be Easy</span>
              <span>•</span>
              <span>Be Fast</span>
              <span>•</span>
              <span>Be Customer Centric</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;