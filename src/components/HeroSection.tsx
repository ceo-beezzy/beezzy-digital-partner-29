import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-6 pt-32 pb-16 relative overflow-hidden grid-bg noise-overlay">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Tag */}
        <div className="tag-neon mb-10">
          Parceiro estratégico de grandes empresas
        </div>

        {/* Main Headline */}
        <h1 className="heading-hero mb-8">
          <span className="text-foreground">TRANSFORMAMOS</span>
          <br />
          <span className="text-foreground">DESAFIOS EM </span>
          <span className="text-primary text-glow">RESULTADOS</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          Há mais de 5 anos, ajudamos mais de 350 empresas a alcançar resultados 
          extraordinários através de estratégias digitais integradas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="btn-neon">
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-outline-neon">
            <Play className="w-4 h-4" />
            Conheça nossos cases
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center border-r border-border last:border-r-0">
            <div className="stat-number mb-2">350+</div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Empresas atendidas</p>
          </div>
          <div className="text-center border-r border-border">
            <div className="stat-number mb-2">5+</div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Anos de experiência</p>
          </div>
          <div className="text-center">
            <div className="stat-number mb-2">245%</div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Crescimento médio</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
