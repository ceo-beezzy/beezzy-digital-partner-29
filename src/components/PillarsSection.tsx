const PillarsSection = () => {
  const pillars = [
    {
      title: "Be Easy",
      description: "Tornamos o complexo simples. Nossa abordagem é sempre focada na facilidade de implementação e usabilidade.",
    },
    {
      title: "Be Fast",
      description: "Velocidade é essencial no mundo digital. Entregamos soluções ágeis sem comprometer a qualidade.",
    },
    {
      title: "Be Customer Centric",
      description: "O cliente está sempre no centro de tudo que fazemos. Cada decisão é pensada para maximizar o valor entregue.",
    }
  ];

  return (
    <section className="py-20 bg-background border-t border-foreground/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Seção IV</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4 text-foreground">
            Nossos Pilares
          </h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto italic">
            Os valores fundamentais que guiam cada projeto
          </p>
        </div>

        {/* Pillars as editorial layout */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="text-6xl font-serif font-bold text-foreground/10 mb-4">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold mb-4 text-foreground uppercase tracking-wide">
                {pillar.title}
              </h3>
              <div className="w-12 h-px bg-foreground mx-auto mb-4"></div>
              <p className="text-muted-foreground font-body leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="border-t-2 border-b-2 border-foreground py-12 text-center">
            <blockquote className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 italic">
              "Somos o Be Easy para a sua empresa"
            </blockquote>
            <p className="text-muted-foreground font-body text-lg">
              Nossa missão é simplificar a jornada digital da sua empresa, 
              garantindo resultados excepcionais de forma rápida e centrada no cliente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
