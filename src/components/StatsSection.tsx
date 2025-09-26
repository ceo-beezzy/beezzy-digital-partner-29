import { TrendingUp, Users, DollarSign, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "350+",
      label: "Empresas Atendidas",
      description: "Transformamos negócios de todos os portes"
    },
    {
      icon: DollarSign,
      number: "R$ 15M+",
      label: "Investidos em Projetos",
      description: "Capital aplicado em soluções digitais"
    },
    {
      icon: Clock,
      number: "5+",
      label: "Anos de Mercado",
      description: "Experiência consolidada no digital"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-transparent to-brand-secondary/5" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-brand-primary/10 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-foreground mb-6">
            Números que Falam por Si
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nossa trajetória é marcada por resultados consistentes e crescimento sustentável
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-card-border hover:border-brand-primary/30 transition-all duration-500 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-4xl md:text-5xl font-montserrat font-bold text-brand-primary group-hover:text-brand-secondary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-foreground">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-primary/5 to-brand-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Faça parte dessas estatísticas de sucesso
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-success/10 text-brand-success text-sm font-medium">
              <div className="w-2 h-2 bg-brand-success rounded-full animate-pulse" />
              Consultoria Gratuita
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium">
              <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              Resposta em 24h
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;