const StatsSection = () => {
  const stats = [
    {
      number: "245%",
      label: "Crescimento médio",
      description: "Aumento em conversão dos nossos clientes"
    },
    {
      number: "90",
      label: "Dias",
      description: "Tempo médio para retorno do investimento"
    },
    {
      number: "100%",
      label: "Sucesso",
      description: "Dos clientes alcançaram suas metas"
    },
    {
      number: "72h",
      label: "Primeira entrega",
      description: "Velocidade na implementação inicial"
    }
  ];

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag mb-4">Resultados comprovados</span>
          <h2 className="heading-section mb-4">
            Números que falam<br className="hidden md:block" />
            por si só
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Métricas reais dos últimos 12 meses de atuação com nossos clientes
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-modern text-center"
            >
              <div className="stat-number mb-2">
                {stat.number}
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-widest mb-2 text-foreground">
                {stat.label}
              </h3>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <div className="divider-gradient mb-8" />
          <p className="text-lg text-muted-foreground italic">
            "Cada número representa uma história de transformação, 
            uma empresa que cresceu e um sonho que se tornou realidade."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
