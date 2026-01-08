import VennDiagramSVG from "@/components/VennDiagramSVG";

const VennDiagramSection = () => {
  return (
    <section className="py-20 bg-background border-t border-foreground/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Seção V</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4 text-foreground">
            A Interseção Perfeita
          </h2>
          <div className="w-24 h-0.5 bg-foreground mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto italic">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center items-center max-w-xl mx-auto mb-16">
          <VennDiagramSVG />
        </div>

        {/* Three columns explanation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-foreground/20 pt-12">
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3 text-foreground uppercase tracking-wide">
              Resultado
            </h3>
            <p className="text-muted-foreground font-body text-sm">
              Foco em resultados mensuráveis e crescimento sustentável
            </p>
          </div>
          <div className="text-center border-x border-foreground/20 px-8">
            <h3 className="text-xl font-serif font-bold mb-3 text-foreground uppercase tracking-wide">
              Gestão
            </h3>
            <p className="text-muted-foreground font-body text-sm">
              Processos eficientes e gestão estratégica do seu negócio
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3 text-foreground uppercase tracking-wide">
              Tecnologia
            </h3>
            <p className="text-muted-foreground font-body text-sm">
              Soluções tecnológicas inovadoras e de ponta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
