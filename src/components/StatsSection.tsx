const StatsSection = () => {
  const stats = [
    {
      number: "245",
      suffix: "%",
      label: "Crescimento",
      description: "Aumento médio em conversão"
    },
    {
      number: "90",
      suffix: " dias",
      label: "ROI",
      description: "Tempo médio para retorno"
    },
    {
      number: "100",
      suffix: "%",
      label: "Sucesso",
      description: "Clientes alcançaram metas"
    },
    {
      number: "72",
      suffix: "h",
      label: "Velocidade",
      description: "Primeira entrega"
    }
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 md:py-32 bg-background border-y border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="tag-neon mb-4 sm:mb-6 text-[10px] sm:text-xs">Resultados comprovados</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
            NÚMEROS QUE<br />
            <span className="text-primary text-glow">FALAM</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background p-4 sm:p-6 md:p-8 lg:p-10 text-center group hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-baseline justify-center mb-2">
                <span className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-none text-primary text-glow">
                  {stat.number}
                </span>
                {stat.suffix && (
                  <span className="text-primary font-display text-lg sm:text-xl md:text-2xl lg:text-3xl">
                    {stat.suffix}
                  </span>
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-widest mb-1 sm:mb-2 text-foreground">
                {stat.label}
              </h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-12 sm:mt-16 md:mt-20 overflow-hidden border-y border-border py-4 sm:py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 sm:gap-12 mx-4 sm:mx-6">
                <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest">Transformação Digital</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest">Resultados Mensuráveis</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest">Crescimento Sustentável</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-xs sm:text-sm uppercase tracking-widest">Inovação Contínua</span>
                <span className="text-primary">◆</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
