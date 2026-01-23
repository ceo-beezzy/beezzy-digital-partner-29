const TransitionStatsSection = () => {
  const stats = [
    {
      number: "350+",
      label: "Empresas atendidas"
    },
    {
      number: "5+",
      label: "Anos de experiência"
    },
    {
      number: "245%",
      label: "Crescimento médio"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-card border-y border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`text-center py-4 sm:py-0 ${
                index < stats.length - 1 ? 'border-b sm:border-b-0 sm:border-r border-border' : ''
              }`}
            >
              <div className="text-primary font-display text-4xl md:text-5xl lg:text-6xl mb-2 text-glow">
                {stat.number}
              </div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransitionStatsSection;
