import VennDiagramSVG from "@/components/VennDiagramSVG";

const VennDiagramSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-brand-dark to-brand-medium overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-blue-bright rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cream rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-brand-cream font-montserrat">
            A Interseção Perfeita
          </h2>
          <p className="text-lg md:text-xl text-brand-cream/80 max-w-3xl mx-auto font-montserrat">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-2xl">
            <VennDiagramSVG />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-brand-medium/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
            <h3 className="text-2xl font-bold mb-3 text-brand-cream font-montserrat">Resultado</h3>
            <p className="text-brand-cream/70">
              Foco em resultados mensuráveis e crescimento sustentável
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-brand-medium/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
            <h3 className="text-2xl font-bold mb-3 text-brand-cream font-montserrat">Gestão</h3>
            <p className="text-brand-cream/70">
              Processos eficientes e gestão estratégica do seu negócio
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-brand-medium/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
            <h3 className="text-2xl font-bold mb-3 text-brand-cream font-montserrat">Tecnologia</h3>
            <p className="text-brand-cream/70">
              Soluções tecnológicas inovadoras e de ponta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
