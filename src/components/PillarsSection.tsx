import { Zap, Clock, Heart } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Be Easy",
      description: "Tornamos o complexo simples. Nossa abordagem é sempre focada na facilidade de implementação e usabilidade.",
    },
    {
      icon: Clock,
      title: "Be Fast",
      description: "Velocidade é essencial no mundo digital. Entregamos soluções ágeis sem comprometer a qualidade.",
    },
    {
      icon: Heart,
      title: "Be Customer Centric",
      description: "O cliente está sempre no centro de tudo que fazemos. Cada decisão é pensada para maximizar o valor entregue.",
    }
  ];

  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-dark mb-4">Nossos pilares</span>
          <h2 className="heading-section text-dark-fg mb-4">
            Valores que guiam<br className="hidden md:block" />
            cada projeto
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="icon-container-dark mx-auto mb-6">
                <pillar.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-dark-fg">
                {pillar.title}
              </h3>
              <p className="text-dark-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-dark-fg/5 rounded-2xl p-10 text-center border border-dark-fg/10">
            <blockquote className="text-2xl md:text-3xl font-bold text-dark-fg mb-4">
              "Somos o <span className="text-gradient-primary">Be Easy</span> para a sua empresa"
            </blockquote>
            <p className="text-dark-muted text-lg">
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
