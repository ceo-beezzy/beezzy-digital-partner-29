import { Users, Wrench, TrendingUp, ArrowUpRight } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "advisor",
      icon: Users,
      title: "Advisor",
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
      title: "Forge",
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
      title: "Growth",
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
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="tag-dark mb-4">Nossas soluções</span>
          <h2 className="heading-section text-dark-fg mb-4">
            Três verticais que<br className="hidden md:block" />
            trabalham em sinergia
          </h2>
          <div className="accent-line mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <article 
              key={service.id}
              className="group relative bg-dark-fg/5 rounded-2xl p-8 border border-dark-fg/10 transition-all duration-300 hover:bg-dark-fg/10 hover:border-primary/30"
            >
              {/* Icon */}
              <div className="icon-container-dark mb-6">
                <service.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>

              {/* Content */}
              <span className="text-xs uppercase tracking-widest text-dark-muted">{service.subtitle}</span>
              <h3 className="text-2xl font-bold text-dark-fg mt-2 mb-4 flex items-center gap-2">
                {service.title}
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>
              
              <p className="text-dark-muted leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-sm text-dark-muted">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-dark-fg/5 border border-dark-fg/10">
            <span className="text-dark-fg font-medium">Quer saber qual solução é ideal para você?</span>
            <button className="btn-primary py-2 px-6 text-sm">
              Agendar conversa
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
