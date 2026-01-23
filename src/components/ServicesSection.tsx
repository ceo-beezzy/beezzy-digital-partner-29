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
    <section id="services" className="py-32 bg-background relative grid-bg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <div className="tag-neon mb-6">Nossas soluções</div>
            <h2 className="heading-section text-foreground">
              TRÊS VERTICAIS<br />
              <span className="text-primary text-glow">EM SINERGIA</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            Cada vertical é projetada para entregar valor específico, mas a verdadeira magia acontece quando trabalham juntas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <article 
              key={service.id}
              className="group card-dark hud-frame hover-lift"
            >
              {/* Number */}
              <div className="text-primary/30 font-display text-6xl mb-4">
                {service.number}
              </div>

              {/* Icon */}
              <div className="icon-neon mb-6">
                <service.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{service.subtitle}</span>
              <h3 className="heading-card text-foreground mt-2 mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 border border-border">
            <span className="text-foreground font-medium text-lg">Quer saber qual solução é ideal para você?</span>
            <button className="btn-neon py-3 px-8 text-xs">
              Agendar conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
