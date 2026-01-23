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
    <section id="methodology" className="py-16 sm:py-24 md:py-32 bg-background relative grid-bg">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="tag-neon mb-4 sm:mb-6 text-[10px] sm:text-xs">Metodologia</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
            A INTERSEÇÃO<br />
            <span className="text-primary text-glow">PERFEITA</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg px-2">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center items-center max-w-xs sm:max-w-md lg:max-w-lg mx-auto mb-12 sm:mb-16 md:mb-20">
          <VennDiagramSVG />
        </div>

        {/* Three columns explanation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {concepts.map((concept, index) => (
            <div key={index} className="card-dark text-center hud-frame hover-lift p-4 sm:p-6">
              <div className="icon-neon mx-auto mb-4 sm:mb-6 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                <concept.icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase mb-3 sm:mb-4 text-foreground">
                {concept.title}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base">
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
