const HeroSection = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <section className="min-h-screen bg-background flex flex-col">
      {/* Newspaper Header */}
      <header className="border-b-4 border-foreground pt-8 pb-6">
        <div className="container mx-auto px-6">
          {/* Date line */}
          <div className="flex justify-between items-center text-sm uppercase tracking-widest text-muted-foreground mb-4">
            <span>São Paulo, Brasil</span>
            <span>{currentDate}</span>
            <span>Edição Digital</span>
          </div>
          
          {/* Masthead */}
          <div className="text-center py-8">
            <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tight text-foreground">
              BEEZZY
            </h1>
            <p className="text-lg md:text-xl font-body italic text-muted-foreground mt-2">
              "Sua solução digital completa"
            </p>
          </div>

          {/* Section indicators */}
          <div className="flex justify-center gap-8 text-xs uppercase tracking-[0.3em] text-muted-foreground border-t border-foreground/20 pt-4">
            <span>Be Easy</span>
            <span className="text-foreground">•</span>
            <span>Be Fast</span>
            <span className="text-foreground">•</span>
            <span>Be Customer Centric</span>
          </div>
        </div>
      </header>

      {/* Main Headline */}
      <div className="container mx-auto px-6 py-12 flex-1">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Main story */}
          <div className="md:col-span-8 border-r border-foreground/20 pr-8">
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 text-foreground">
              Tornamos o complexo simples através de soluções inovadoras
            </h2>
            <div className="border-t-2 border-foreground w-24 mb-6"></div>
            <p className="text-xl md:text-2xl font-body leading-relaxed text-muted-foreground mb-8 drop-cap">
              Há mais de 5 anos, a Beezzy transforma empresas com estratégias digitais que realmente funcionam. 
              São mais de 350 empresas que confiaram em nossa metodologia única, integrando tecnologia, 
              gestão e resultados em um ecossistema completo.
            </p>
            
            {/* Three Pillars as newspaper columns */}
            <div className="grid grid-cols-3 gap-6 border-t border-foreground/20 pt-6">
              <div className="text-center">
                <h3 className="font-serif font-bold text-lg mb-2">BE EASY</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Simplicidade em cada solução
                </p>
              </div>
              <div className="text-center border-x border-foreground/20 px-4">
                <h3 className="font-serif font-bold text-lg mb-2">BE FAST</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Agilidade que gera resultados
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-serif font-bold text-lg mb-2">BE CUSTOMER CENTRIC</h3>
                <p className="text-sm text-muted-foreground font-body">
                  Foco total no cliente
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar news */}
          <div className="md:col-span-4 space-y-6">
            <div className="border-b border-foreground/20 pb-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Destaque</span>
              <h3 className="font-serif font-bold text-xl mt-2 mb-2">350+ Empresas Transformadas</h3>
              <p className="text-sm text-muted-foreground font-body">
                Mais de cinco anos de resultados comprovados no mercado brasileiro.
              </p>
            </div>
            
            <div className="border-b border-foreground/20 pb-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Resultados</span>
              <h3 className="font-serif font-bold text-xl mt-2 mb-2">245% de Crescimento Médio</h3>
              <p className="text-sm text-muted-foreground font-body">
                Taxa de conversão dos nossos clientes supera expectativas do mercado.
              </p>
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Velocidade</span>
              <h3 className="font-serif font-bold text-xl mt-2 mb-2">90 Dias para ROI</h3>
              <p className="text-sm text-muted-foreground font-body">
                Retorno do investimento garantido em tempo recorde.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
