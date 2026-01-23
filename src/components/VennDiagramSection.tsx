import VennDiagramSVG from "@/components/VennDiagramSVG";
import { Target, Settings, Cpu } from "lucide-react";

const VennDiagramSection = () => {
  const concepts = [
    {
      icon: Target,
      title: "RESULTADO",
      description: "Foco em resultados mensuráveis e crescimento sustentável"
    },
    {
      icon: Settings,
      title: "GESTÃO",
      description: "Processos eficientes e gestão estratégica do seu negócio"
    },
    {
      icon: Cpu,
      title: "TECNOLOGIA",
      description: "Soluções tecnológicas inovadoras e de ponta"
    }
  ];

  return (
    <section id="methodology" className="py-32 bg-background relative grid-bg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-neon mb-6">Metodologia</div>
          <h2 className="heading-section text-foreground">
            A INTERSEÇÃO<br />
            <span className="text-primary text-glow">PERFEITA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center items-center max-w-lg mx-auto mb-20">
          <VennDiagramSVG />
        </div>

        {/* Three columns explanation */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={index} className="card-dark text-center hud-frame hover-lift">
              <div className="icon-neon mx-auto mb-6">
                <concept.icon className="w-6 h-6" strokeWidth={1.5} />
              </div>
              <h3 className="heading-card mb-4 text-foreground">
                {concept.title}
              </h3>
              <p className="text-muted-foreground">
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
