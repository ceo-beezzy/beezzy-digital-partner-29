import { Quote, ArrowRight } from "lucide-react";

const CaseSuccessSection = () => {
  return (
    <section id="cases" className="py-16 sm:py-24 md:py-32 bg-card border-y border-border relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <div className="tag-neon mb-4 sm:mb-6 text-[10px] sm:text-xs">Case de sucesso</div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase leading-[0.95] text-foreground">
            TRANSFORMAÇÃO<br />
            <span className="text-primary text-glow">REAL</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg px-2">
            Uma história de como ajudamos empresas a superar desafios e alcançar resultados extraordinários
          </p>
        </div>

        {/* Case Study Card */}
        <div className="max-w-5xl mx-auto">
          <article className="border border-border relative hud-frame">
            <div className="p-4 sm:p-6 md:p-10 lg:p-16">
              {/* Company Tag */}
              <div className="tag-neon mb-4 sm:mb-6 md:mb-8 text-[10px] sm:text-xs">
                Imobiliária Nova Era
              </div>

              {/* Headline */}
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase leading-[0.95] text-foreground mb-4 sm:mb-6">
                DE PREJUÍZO A LUCRO<br />
                EM <span className="text-primary text-glow">90 DIAS</span>
              </h3>
              
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 md:mb-12 max-w-2xl">
                Como transformamos uma empresa em crise em uma história de recuperação e crescimento sustentável
              </p>

              {/* Challenge and Solution */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
                <div className="border border-border p-4 sm:p-6 md:p-8">
                  <h4 className="font-display text-base sm:text-lg md:text-xl tracking-wider mb-3 sm:mb-4 text-primary uppercase">
                    O DESAFIO
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    A Nova Era enfrentava mais de 8 meses consecutivos sem lucro, 
                    com processos desorganizados e baixa conversão de leads.
                  </p>
                </div>
                <div className="border border-border p-4 sm:p-6 md:p-8">
                  <h4 className="font-display text-base sm:text-lg md:text-xl tracking-wider mb-3 sm:mb-4 text-primary uppercase">
                    A TRANSFORMAÇÃO
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Implementamos uma estratégia integrada combinando automação de processos 
                    e otimização de marketing digital.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border mb-8 sm:mb-10 md:mb-12">
                <div className="bg-background p-4 sm:p-6 md:p-8 text-center">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-1 sm:mb-2">3º</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Mês</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Retorno ao lucro</div>
                </div>
                <div className="bg-background p-4 sm:p-6 md:p-8 text-center">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-1 sm:mb-2">245%</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Aumento</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Conversão de leads</div>
                </div>
                <div className="bg-background p-4 sm:p-6 md:p-8 text-center">
                  <div className="font-display text-3xl sm:text-4xl md:text-5xl text-primary mb-1 sm:mb-2">100%</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mb-1">Digital</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Processos automatizados</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-l-2 border-primary pl-4 sm:pl-6 md:pl-8 py-2 sm:py-4 relative">
                <Quote className="absolute -left-3 sm:-left-4 top-2 sm:top-4 w-6 h-6 sm:w-8 sm:h-8 text-primary bg-card" />
                <blockquote className="text-sm sm:text-base lg:text-lg text-foreground italic mb-3 sm:mb-4">
                  "A Beezzy não apenas nos tirou da crise, nos deu as ferramentas e 
                  estratégias para nunca mais voltarmos a essa situação."
                </blockquote>
                <cite className="text-xs sm:text-sm text-primary not-italic font-medium uppercase tracking-widest">
                  — Diretor Comercial, Nova Era Imóveis
                </cite>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button className="btn-neon w-full sm:w-auto text-xs sm:text-sm px-6 sm:px-8 py-3 sm:py-4">
            Quero resultados assim
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;
