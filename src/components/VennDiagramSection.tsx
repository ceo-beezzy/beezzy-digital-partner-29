import VennDiagramSVG from "@/components/VennDiagramSVG";

const VennDiagramSection = () => {
  return (
    <section className="py-20 bg-dark-bg text-dark-fg">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-dark-muted">Seção V</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4">
            A Interseção Perfeita
          </h2>
          <div className="w-24 h-0.5 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-dark-muted font-body max-w-2xl mx-auto italic">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        {/* Diagram */}
        <div className="flex justify-center items-center max-w-xl mx-auto mb-16">
          <VennDiagramSVG />
        </div>

        {/* Three columns explanation */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-dark-muted/30 pt-12">
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-primary">
              Resultado
            </h3>
            <p className="text-dark-muted font-body text-sm">
              Foco em resultados mensuráveis e crescimento sustentável
            </p>
          </div>
          <div className="text-center border-x border-dark-muted/30 px-8">
            <h3 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-primary">
              Gestão
            </h3>
            <p className="text-dark-muted font-body text-sm">
              Processos eficientes e gestão estratégica do seu negócio
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-serif font-bold mb-3 uppercase tracking-wide text-primary">
              Tecnologia
            </h3>
            <p className="text-dark-muted font-body text-sm">
              Soluções tecnológicas inovadoras e de ponta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
