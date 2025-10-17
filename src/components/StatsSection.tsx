import { TrendingUp, Target, Award, Zap } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: "245%",
      label: "Média de Crescimento",
      description: "Aumento médio de conversão dos nossos clientes"
    },
    {
      icon: Target,
      number: "90",
      label: "Dias Médios",
      description: "Para retorno do investimento em nossos projetos"
    },
    {
      icon: Award,
      number: "100%",
      label: "Taxa de Sucesso",
      description: "Clientes que alcançaram ou superaram suas metas"
    },
    {
      icon: Zap,
      number: "72h",
      label: "Implementação",
      description: "Tempo médio para primeira entrega de valor"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-brand-medium via-brand-dark to-brand-medium relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-pulse delay-1000" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-brand-cream mb-6">
            Resultados que <span className="text-primary">Entregamos</span>
          </h2>
          <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto">
            Métricas reais baseadas nos resultados alcançados pelos nossos clientes nos últimos 12 meses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-brand-medium/50 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div className="text-4xl md:text-5xl font-montserrat font-bold text-primary group-hover:text-primary/80 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-brand-cream">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-brand-cream/70 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Impact Statement */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-brand-cream/80 italic">
              "Cada número representa uma história de transformação, uma empresa que cresceu e um sonho que se tornou realidade."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;