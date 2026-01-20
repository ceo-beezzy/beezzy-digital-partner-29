const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20">
      {/* Masthead */}
      <div className="text-center mb-16">
        <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight text-foreground">
          BEEZZY
        </h1>
        <p className="text-lg md:text-xl font-body italic text-muted-foreground mt-4">
          "Sua solução digital completa"
        </p>
      </div>

      {/* Main Headline */}
      <div className="max-w-4xl text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-8 text-foreground">
          Tornamos o complexo simples através de soluções inovadoras
        </h2>
        <div className="border-t-2 border-primary w-24 mx-auto mb-8"></div>
        <p className="text-lg md:text-xl font-body leading-relaxed text-muted-foreground">
          Há mais de 5 anos, a Beezzy transforma empresas com estratégias digitais que realmente funcionam. 
          São mais de 350 empresas que confiaram em nossa metodologia única, integrando tecnologia, 
          gestão e resultados em um ecossistema completo.
        </p>
      </div>

      {/* Three Pillars */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
        <div>
          <h3 className="font-serif font-bold text-lg mb-2 text-primary">BE EASY</h3>
          <p className="text-sm text-muted-foreground font-body">
            Simplicidade em cada solução
          </p>
        </div>
        <span className="hidden md:block text-primary">•</span>
        <div>
          <h3 className="font-serif font-bold text-lg mb-2 text-primary">BE FAST</h3>
          <p className="text-sm text-muted-foreground font-body">
            Agilidade que gera resultados
          </p>
        </div>
        <span className="hidden md:block text-primary">•</span>
        <div>
          <h3 className="font-serif font-bold text-lg mb-2 text-primary">BE CUSTOMER CENTRIC</h3>
          <p className="text-sm text-muted-foreground font-body">
            Foco total no cliente
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
