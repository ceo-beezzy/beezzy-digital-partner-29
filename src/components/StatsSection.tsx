const StatsSection = () => {
  const stats = [
    {
      number: "245%",
      label: "Média de Crescimento",
      description: "Aumento médio de conversão"
    },
    {
      number: "90",
      label: "Dias Médios",
      description: "Para retorno do investimento"
    },
    {
      number: "100%",
      label: "Taxa de Sucesso",
      description: "Clientes que alcançaram metas"
    },
    {
      number: "72h",
      label: "Implementação",
      description: "Primeira entrega de valor"
    }
  ];

  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-background/60">Seção III</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4">
            Resultados que Entregamos
          </h2>
          <div className="w-24 h-0.5 bg-background mx-auto mb-6"></div>
          <p className="text-lg text-background/70 font-body max-w-2xl mx-auto italic">
            Métricas reais dos últimos 12 meses
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-b border-background/30 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`py-12 px-6 text-center ${index !== 3 ? 'border-r border-background/30' : ''}`}
            >
              <div className="text-5xl md:text-6xl font-serif font-bold mb-2">
                {stat.number}
              </div>
              <h3 className="text-sm font-serif font-bold uppercase tracking-widest mb-2">
                {stat.label}
              </h3>
              <p className="text-xs text-background/60 font-body">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center mt-16">
          <p className="text-lg text-background/80 font-body italic max-w-2xl mx-auto">
            "Cada número representa uma história de transformação, 
            uma empresa que cresceu e um sonho que se tornou realidade."
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
