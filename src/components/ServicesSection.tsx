import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Wrench, TrendingUp, ArrowRight } from "lucide-react";

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
      ],
      gradient: "from-brand-primary to-brand-secondary"
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
      ],
      gradient: "from-brand-secondary to-brand-accent"
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
      ],
      gradient: "from-brand-accent to-brand-primary"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-montserrat mb-6 text-foreground">
            Nossas <span className="bg-gradient-primary bg-clip-text text-transparent">Verticais</span>
          </h2>
          <p className="text-xl text-muted-foreground font-montserrat max-w-3xl mx-auto">
            Três pilares fundamentais que trabalham em sinergia para acelerar o crescimento da sua empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id}
              className="group relative overflow-hidden border-0 bg-gradient-card shadow-soft hover:shadow-large transition-all duration-500 hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold font-montserrat mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {service.subtitle}
                  </p>
                  <p className="text-card-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-brand-accent rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Saiba Mais
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-3xl shadow-medium border border-card-border max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold font-montserrat mb-4 text-card-foreground">
              Pronto para transformar seu negócio?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Descubra como nossas soluções integradas podem acelerar o crescimento da sua empresa
            </p>
            <Button 
              variant="hero" 
              size="lg"
              className="px-8 py-4 text-lg"
            >
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;