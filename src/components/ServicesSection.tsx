import { Card } from "@/components/ui/card";
import { Users, Wrench, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: "advisor",
      icon: Users,
      title: "Advisor",
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
      title: "Forge",
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
      title: "Growth",
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
    <section className="py-24 bg-gradient-to-b from-brand-medium to-brand-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-brand-cream">
            Nossas <span className="text-primary">Verticais</span>
          </h2>
          <p className="text-xl text-brand-cream/80 font-montserrat max-w-3xl mx-auto">
            Três pilares fundamentais que trabalham em sinergia para acelerar o crescimento da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative overflow-hidden border-0 bg-brand-medium/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-montserrat mb-2 text-brand-cream">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-brand-cream/70 mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-brand-cream/80 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-brand-cream/70">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center">
          <div className="bg-brand-medium/50 backdrop-blur-sm p-8 rounded-3xl shadow-medium border border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 text-brand-cream">
              O Diferencial Beezzy
            </h3>
            <p className="text-brand-cream/80 mb-6 text-lg">
              Enquanto outros oferecem soluções isoladas, nós integramos estratégia, tecnologia e marketing em um ecossistema único que maximiza resultados e acelera o crescimento sustentável.
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2 text-brand-cream/70">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Abordagem integrada
              </div>
              <div className="flex items-center justify-center gap-2 text-brand-cream/70">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Foco em resultados
              </div>
              <div className="flex items-center justify-center gap-2 text-brand-cream/70">
                <div className="w-2 h-2 bg-primary rounded-full" />
                Parceria estratégica
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;