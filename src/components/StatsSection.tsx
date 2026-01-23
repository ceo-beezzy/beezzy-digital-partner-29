const StatsSection = () => {
  const stats = [
    {
      number: "245%",
      label: "Crescimento",
      description: "Aumento médio em conversão"
    },
    {
      number: "90",
      suffix: "dias",
      label: "ROI",
      description: "Tempo médio para retorno"
    },
    {
      number: "100%",
      label: "Sucesso",
      description: "Clientes alcançaram metas"
    },
    {
      number: "72h",
      label: "Velocidade",
      description: "Primeira entrega"
    }
  ];

  return (
    <section id="stats" className="py-32 bg-background border-y border-border relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="tag-neon mb-6">Resultados comprovados</div>
          <h2 className="heading-section text-foreground">
            NÚMEROS QUE<br />
            <span className="text-primary text-glow">FALAM</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-background p-10 text-center group hover:bg-card transition-colors duration-300"
            >
              <div className="stat-number-large mb-2">
                {stat.number}
              </div>
              {stat.suffix && (
                <div className="text-primary font-display text-2xl -mt-2 mb-2">{stat.suffix}</div>
              )}
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-2 text-foreground">
                {stat.label}
              </h3>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Marquee */}
        <div className="mt-20 overflow-hidden border-y border-border py-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-12 mx-6">
                <span className="text-muted-foreground text-sm uppercase tracking-widest">Transformação Digital</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-sm uppercase tracking-widest">Resultados Mensuráveis</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-sm uppercase tracking-widest">Crescimento Sustentável</span>
                <span className="text-primary">◆</span>
                <span className="text-muted-foreground text-sm uppercase tracking-widest">Inovação Contínua</span>
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
