import { Quote, ArrowRight } from "lucide-react";

const CaseSuccessSection = () => {
  return (
    <section id="cases" className="py-32 bg-card border-y border-border relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="tag-neon mb-6">Case de sucesso</div>
          <h2 className="heading-section text-foreground">
            TRANSFORMAÇÃO<br />
            <span className="text-primary text-glow">REAL</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Uma história de como ajudamos empresas a superar desafios e alcançar resultados extraordinários
          </p>
        </div>

        {/* Case Study Card */}
        <div className="max-w-5xl mx-auto">
          <article className="border border-border relative hud-frame">
            <div className="p-10 md:p-16">
              {/* Company Tag */}
              <div className="tag-neon mb-8">
                Imobiliária Nova Era
              </div>

              {/* Headline */}
              <h3 className="heading-section text-foreground mb-6">
                DE PREJUÍZO A LUCRO<br />
                EM <span className="text-primary text-glow">90 DIAS</span>
              </h3>
              
              <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
                Como transformamos uma empresa em crise em uma história de recuperação e crescimento sustentável
              </p>

              {/* Challenge and Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="border border-border p-8">
                  <h4 className="font-display text-xl tracking-wider mb-4 text-primary">
                    O DESAFIO
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    A Nova Era enfrentava mais de 8 meses consecutivos sem lucro, 
                    com processos desorganizados e baixa conversão de leads.
                  </p>
                </div>
                <div className="border border-border p-8">
                  <h4 className="font-display text-xl tracking-wider mb-4 text-primary">
                    A TRANSFORMAÇÃO
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementamos uma estratégia integrada combinando automação de processos 
                    e otimização de marketing digital.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-px bg-border mb-12">
                <div className="bg-background p-8 text-center">
                  <div className="stat-number mb-2">3º</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Mês</div>
                  <div className="text-sm text-muted-foreground">Retorno ao lucro</div>
                </div>
                <div className="bg-background p-8 text-center">
                  <div className="stat-number mb-2">245%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Aumento</div>
                  <div className="text-sm text-muted-foreground">Conversão de leads</div>
                </div>
                <div className="bg-background p-8 text-center">
                  <div className="stat-number mb-2">100%</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Digital</div>
                  <div className="text-sm text-muted-foreground">Processos automatizados</div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="border-l-2 border-primary pl-8 py-4 relative">
                <Quote className="absolute -left-4 top-4 w-8 h-8 text-primary bg-card" />
                <blockquote className="text-lg text-foreground italic mb-4">
                  "A Beezzy não apenas nos tirou da crise, nos deu as ferramentas e 
                  estratégias para nunca mais voltarmos a essa situação."
                </blockquote>
                <cite className="text-sm text-primary not-italic font-medium uppercase tracking-widest">
                  — Diretor Comercial, Nova Era Imóveis
                </cite>
              </div>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="btn-neon">
            Quero resultados assim
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;
