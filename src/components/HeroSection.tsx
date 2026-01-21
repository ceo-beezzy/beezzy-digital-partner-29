import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen section-gradient flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Tag */}
        <div className="tag mb-8">
          Parceiro estratégico de grandes empresas
        </div>

        {/* Main Headline */}
        <h1 className="heading-display mb-6">
          Transformamos desafios<br className="hidden md:block" />
          em <span className="text-gradient-primary">resultados</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          Há mais de 5 anos, ajudamos mais de 350 empresas a alcançar resultados 
          extraordinários através de estratégias digitais integradas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="btn-primary">
            Fale com um especialista
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="btn-secondary">
            <Play className="w-4 h-4" />
            Conheça nossos cases
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-10 border-t border-foreground/10">
          <div className="text-center">
            <div className="stat-number">350+</div>
            <p className="text-sm text-muted-foreground mt-1">Empresas atendidas</p>
          </div>
          <div className="text-center">
            <div className="stat-number">5+</div>
            <p className="text-sm text-muted-foreground mt-1">Anos de experiência</p>
          </div>
          <div className="text-center">
            <div className="stat-number">245%</div>
            <p className="text-sm text-muted-foreground mt-1">Crescimento médio</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
