import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-32 pb-16 relative overflow-hidden grid-bg noise-overlay">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-[500px] h-64 sm:h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
        {/* Tag */}
        <div className="tag-neon mb-6 sm:mb-10 text-[10px] sm:text-xs">
          Parceiro estratégico de grandes empresas
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] mb-6 sm:mb-8 uppercase">
          <span className="text-foreground">TRANSFORMAMOS</span>
          <br />
          <span className="text-foreground">DESAFIOS EM </span>
          <span className="text-primary text-glow">RESULTADOS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light px-2">
          Há mais de 5 anos, ajudamos mais de 350 empresas a alcançar resultados 
          extraordinários através de estratégias digitais integradas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button className="btn-neon w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-outline-neon w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
            <Play className="w-4 h-4" />
            Conheça nossos cases
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
