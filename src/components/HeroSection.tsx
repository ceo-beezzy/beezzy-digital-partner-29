import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import beezzyLogo from "@/assets/beezzy-logo.png";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Brand Pillars Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
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
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Brand */}
          <div className="mb-8 flex items-center justify-center gap-3">
            
            <h1 className="text-4xl font-bold font-montserrat tracking-tight mx-0 md:text-9xl">
              Beezzy
            </h1>
          </div>

          {/* Main Headline */}
          <h2 className="text-5xl md:text-7xl font-bold font-montserrat leading-tight mb-6">
            Sua Solução Digital
            <span className="block bg-gradient-to-r from-brand-accent to-white bg-clip-text text-transparent">
              Completa
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl font-light font-montserrat mb-8 max-w-3xl mx-auto opacity-90">
            Somos o parceiro estratégico que toda empresa gostaria de ter para crescer e prosperar no mundo digital.
          </p>

          {/* Value Proposition */}
          <div className="mb-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 max-w-2xl mx-auto">
            <p className="text-lg font-medium font-montserrat">
              Tornando o <span className="text-brand-accent font-bold">complexo simples</span> através de soluções inovadoras
            </p>
          </div>

          {/* Value Proposition Statement */}
          <div className="text-center">
            <p className="text-2xl md:text-3xl font-semibold font-montserrat text-brand-accent mb-4">
              Mais que uma empresa de tecnologia
            </p>
            <p className="text-lg md:text-xl font-light opacity-90 max-w-2xl mx-auto">
              Somos arquitetos de transformação digital que combinam estratégia, tecnologia e marketing para gerar resultados excepcionais
            </p>
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