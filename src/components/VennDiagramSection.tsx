import VennDiagramSVG from "@/components/VennDiagramSVG";
import { Target, Settings, Cpu } from "lucide-react";

const VennDiagramSection = () => {
  const concepts = [
    {
      icon: Target,
      title: "Resultado",
      description: "Foco em resultados mensuráveis e crescimento sustentável"
    },
    {
      icon: Settings,
      title: "Gestão",
      description: "Processos eficientes e gestão estratégica do seu negócio"
    },
    {
      icon: Cpu,
      title: "Tecnologia",
      description: "Soluções tecnológicas inovadoras e de ponta"
    }
  ];

  return (
    <section className="py-24 section-gradient">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="tag mb-4">Metodologia</span>
          <h2 className="heading-section mb-4">
            A interseção perfeita
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center items-center max-w-lg mx-auto mb-16">
          <VennDiagramSVG />
        </div>

        {/* Three columns explanation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={index} className="card-modern text-center">
              <div className="icon-container mx-auto mb-4">
                <concept.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">
                {concept.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {concept.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
