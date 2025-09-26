import { Card } from "@/components/ui/card";
import { Zap, Clock, Heart } from "lucide-react";

const PillarsSection = () => {
  const pillars = [
    {
      icon: Zap,
      title: "Be Easy",
      description: "Tornamos o complexo simples. Nossa abordagem é sempre focada na facilidade de implementação e usabilidade.",
      color: "text-brand-accent",
      bgColor: "bg-brand-accent/10"
    },
    {
      icon: Clock,
      title: "Be Fast",
      description: "Velocidade é essencial no mundo digital. Entregamos soluções ágeis sem comprometer a qualidade.",
      color: "text-brand-primary",
      bgColor: "bg-brand-primary/10"
    },
    {
      icon: Heart,
      title: "Be Customer Centric",
      description: "O cliente está sempre no centro de tudo que fazemos. Cada decisão é pensada para maximizar o valor entregue.",
      color: "text-brand-secondary",
      bgColor: "bg-brand-secondary/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-foreground">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Pilares</span>
          </h2>
          <p className="text-xl text-muted-foreground font-montserrat max-w-2xl mx-auto">
            Os valores fundamentais que guiam cada projeto e decisão na Beezzy
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-0 bg-card shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-8 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 ${pillar.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <pillar.icon className={`w-10 h-10 ${pillar.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-card-foreground">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>

                {/* Decorative element */}
                <div className="mt-6 w-12 h-1 bg-gradient-primary mx-auto rounded-full" />
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Quote Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-card p-12 rounded-3xl shadow-medium border border-card-border max-w-4xl mx-auto relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-accent/10 rounded-full -translate-x-16 -translate-y-16" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full translate-x-16 translate-y-16" />
            
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-bold font-montserrat text-card-foreground mb-6 italic">
                "Somos o <span className="bg-gradient-primary bg-clip-text text-transparent">Be Easy</span> para a sua empresa"
              </blockquote>
              <p className="text-lg text-muted-foreground">
                Nossa missão é simplificar a jornada digital da sua empresa, garantindo resultados excepcionais de forma rápida e centrada no cliente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;