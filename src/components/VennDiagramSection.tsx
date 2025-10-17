import vennDiagram from "@/assets/venn-diagram.jpg";

const VennDiagramSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#3366ff] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F7F1DD] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#F7F1DD]">
            A Interseção Perfeita
          </h2>
          <p className="text-lg md:text-xl text-[#F7F1DD]/80 max-w-3xl mx-auto">
            Na Beezzy, unimos Resultado, Gestão e Tecnologia para transformar seu negócio
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-2xl">
            <img 
              src={vennDiagram} 
              alt="Diagrama Venn mostrando a interseção entre Resultado, Gestão e Tecnologia na Beezzy" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border border-[#3366ff]/20 hover:border-[#3366ff]/40 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-[#F7F1DD]">Resultado</h3>
            <p className="text-[#F7F1DD]/70">
              Foco em resultados mensuráveis e crescimento sustentável
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border border-[#3366ff]/20 hover:border-[#3366ff]/40 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-[#F7F1DD]">Gestão</h3>
            <p className="text-[#F7F1DD]/70">
              Processos eficientes e gestão estratégica do seu negócio
            </p>
          </div>
          <div className="text-center p-6 rounded-lg bg-[#1e293b]/50 backdrop-blur-sm border border-[#3366ff]/20 hover:border-[#3366ff]/40 transition-all">
            <h3 className="text-2xl font-bold mb-3 text-[#F7F1DD]">Tecnologia</h3>
            <p className="text-[#F7F1DD]/70">
              Soluções tecnológicas inovadoras e de ponta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VennDiagramSection;
