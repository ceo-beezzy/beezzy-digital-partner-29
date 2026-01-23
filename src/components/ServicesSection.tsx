import { Users, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "advisor",
      icon: Users,
      number: "01",
      title: "ADVISOR",
      subtitle: "Consultoria estratégica",
      description: "Atuamos como sócios, oferecendo orientação estratégica e expertise para a gestão e inovação do seu negócio.",
      features: [
        "Planejamento estratégico",
        "Análise de mercado",
        "Gestão de inovação",
        "Mentoria executiva"
      ]
    },
    {
      id: "forge",
      icon: Wrench,
      number: "02",
      title: "FORGE",
      subtitle: "Desenvolvimento de soluções",
      description: "Criamos produtos e soluções digitais sob medida para atender às necessidades específicas do seu negócio.",
      features: [
        "Desenvolvimento de software",
        "Aplicações web e mobile",
        "Sistemas personalizados",
        "Integração de APIs"
      ]
    },
    {
      id: "growth",
      icon: TrendingUp,
      number: "03",
      title: "GROWTH",
      subtitle: "Aceleração de resultados",
      description: "Geramos resultados com marketing digital e estratégias de vendas que realmente convertem.",
      features: [
        "Marketing digital",
        "Estratégias de vendas",
        "Automação de processos",
        "Análise de performance"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 bg-background relative grid-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <div className="tag-neon mb-4 sm:mb-6 text-[10px] sm:text-xs">Nossas soluções</div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
              TRÊS VERTICAIS<br />
              <span className="text-primary text-glow">EM SINERGIA</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base lg:text-lg">
            Cada vertical é projetada para entregar valor específico, mas a verdadeira magia acontece quando trabalham juntas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service) => (
            <article 
              key={service.id}
              className="group card-dark hud-frame hover-lift p-4 sm:p-6"
            >
              {/* Number */}
              <div className="text-primary/30 font-display text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
                {service.number}
              </div>

              {/* Icon */}
              <div className="icon-neon mb-4 sm:mb-6 w-10 h-10 sm:w-14 sm:h-14">
                <service.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground">{service.subtitle}</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl uppercase text-foreground mt-1 sm:mt-2 mb-3 sm:mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-4 h-4 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 sm:space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                    <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 border border-border w-full sm:w-auto">
            <span className="text-foreground font-medium text-sm sm:text-base lg:text-lg text-center">Quer saber qual solução é ideal para você?</span>
            <button className="btn-neon py-2 sm:py-3 px-6 sm:px-8 text-[10px] sm:text-xs w-full sm:w-auto">
              Agendar conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
