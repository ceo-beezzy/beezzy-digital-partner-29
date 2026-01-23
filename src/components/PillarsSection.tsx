import { Zap, Clock, Heart } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Zap,
      title: "BE EASY",
      description: "Tornamos o complexo simples. Nossa abordagem é sempre focada na facilidade de implementação e usabilidade.",
    },
    {
      icon: Clock,
      title: "BE FAST",
      description: "Velocidade é essencial no mundo digital. Entregamos soluções ágeis sem comprometer a qualidade.",
    },
    {
      icon: Heart,
      title: "BE CUSTOMER CENTRIC",
      description: "O cliente está sempre no centro de tudo que fazemos. Cada decisão é pensada para maximizar o valor entregue.",
    }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-card border-y border-border relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <div className="tag-neon mb-4 sm:mb-6 text-[10px] sm:text-xs">Nossos pilares</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
            VALORES QUE<br />
            <span className="text-primary text-glow">NOS GUIAM</span>
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="bg-background p-6 sm:p-8 md:p-12 text-center group hover:bg-card transition-colors">
              <div className="icon-neon mx-auto mb-4 sm:mb-6 md:mb-8 group-hover:border-primary/80 transition-colors w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <pillar.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase mb-3 sm:mb-4 md:mb-6 text-foreground">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="max-w-4xl mx-auto">
          <div className="border-2 border-primary p-6 sm:p-8 md:p-12 text-center relative hud-frame" style={{ boxShadow: 'var(--shadow-glow)' }}>
            <blockquote className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-foreground mb-4 sm:mb-6">
              "SOMOS O <span className="text-primary text-glow">BE EASY</span> PARA A SUA EMPRESA"
            </blockquote>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
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
