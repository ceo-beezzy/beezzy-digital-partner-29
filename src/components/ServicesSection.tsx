import { Users, Wrench, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "advisor",
      icon: Users,
      title: "ADVISOR",
      subtitle: "Sócios em crescimento",
      description: "Atuamos como sócios, oferecendo consultoria e orientação para a gestão e inovação do seu negócio.",
      features: [
        "Consultoria estratégica",
        "Planejamento de crescimento",
        "Análise de mercado",
        "Gestão de inovação"
      ]
    },
    {
      id: "forge",
      icon: Wrench,
      title: "FORGE",
      subtitle: "Criamos soluções",
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
      title: "GROWTH",
      subtitle: "Geramos resultados",
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
    <section className="py-20 bg-dark-bg text-dark-fg">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-dark-muted">Seção II</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-4">
            Nossas Verticais
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-muted font-body max-w-2xl mx-auto italic">
            Três pilares fundamentais que trabalham em sinergia para acelerar o crescimento da sua empresa
          </p>
        </div>

        {/* Services as columns */}
        <div className="grid md:grid-cols-3 gap-0 border-t border-b border-dark-muted/30">
          {services.map((service, index) => (
            <article 
              key={service.id}
              className={`p-8 ${index !== 2 ? 'md:border-r border-dark-muted/30' : ''} ${index !== 0 ? 'border-t md:border-t-0 border-dark-muted/30' : ''}`}
            >
              {/* Icon as decorative element */}
              <div className="flex items-center gap-3 mb-4">
                <service.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                <span className="text-xs uppercase tracking-widest text-dark-muted">{service.subtitle}</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {service.title}
              </h3>
              
              <div className="w-12 h-px bg-primary mb-4"></div>
              
              <p className="text-dark-muted font-body leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features list */}
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-dark-muted font-body">
                    <span className="text-primary">—</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="border-t-2 border-b-2 border-primary py-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              O Diferencial Beezzy
            </h3>
            <p className="text-dark-muted font-body text-lg leading-relaxed italic">
              "Enquanto outros oferecem soluções isoladas, nós integramos estratégia, 
              tecnologia e marketing em um ecossistema único que maximiza resultados."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
