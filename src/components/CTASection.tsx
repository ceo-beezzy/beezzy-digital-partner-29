import { Quote, ArrowRight } from "lucide-react";

const CaseSuccessSection = () => {
  return (
    <section className="py-24 section-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="tag-dark mb-4">Case de sucesso</span>
          <h2 className="heading-section text-dark-fg mb-4">
            Transformação real
          </h2>
          <p className="text-dark-muted max-w-xl mx-auto">
            Uma história de como ajudamos empresas a superar desafios e alcançar resultados extraordinários
          </p>
        </div>

        {/* Case Study Card */}
        <div className="max-w-4xl mx-auto">
          <article className="bg-dark-fg/5 rounded-2xl p-10 border border-dark-fg/10">
            {/* Company Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium">Imobiliária Nova Era</span>
            </div>

            {/* Headline */}
            <h3 className="text-3xl md:text-4xl font-bold text-dark-fg mb-4">
              De prejuízo a lucro<br className="hidden md:block" />
              em <span className="text-gradient-primary">90 dias</span>
            </h3>
            
            <p className="text-dark-muted text-lg mb-10 max-w-2xl">
              Como transformamos uma empresa em crise em uma história de recuperação e crescimento sustentável
            </p>

            {/* Challenge and Solution */}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <div className="bg-dark-fg/5 rounded-xl p-6">
                <h4 className="font-semibold text-sm uppercase tracking-widest mb-3 text-primary">
                  O Desafio
                </h4>
                <p className="text-dark-muted leading-relaxed">
                  A Nova Era enfrentava mais de 8 meses consecutivos sem lucro, 
                  com processos desorganizados e baixa conversão de leads.
                </p>
              </div>
              <div className="bg-dark-fg/5 rounded-xl p-6">
                <h4 className="font-semibold text-sm uppercase tracking-widest mb-3 text-primary">
                  A Transformação
                </h4>
                <p className="text-dark-muted leading-relaxed">
                  Implementamos uma estratégia integrada combinando automação de processos 
                  e otimização de marketing digital.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-dark-fg/5 rounded-xl p-6 text-center">
                <div className="stat-number mb-1">3º</div>
                <div className="text-xs uppercase tracking-widest text-dark-muted">Mês</div>
                <div className="text-sm text-dark-muted mt-1">Retorno ao lucro</div>
              </div>
              <div className="bg-dark-fg/5 rounded-xl p-6 text-center">
                <div className="stat-number mb-1">245%</div>
                <div className="text-xs uppercase tracking-widest text-dark-muted">Aumento</div>
                <div className="text-sm text-dark-muted mt-1">Conversão de leads</div>
              </div>
              <div className="bg-dark-fg/5 rounded-xl p-6 text-center">
                <div className="stat-number mb-1">100%</div>
                <div className="text-xs uppercase tracking-widest text-dark-muted">Digital</div>
                <div className="text-sm text-dark-muted mt-1">Processos automatizados</div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-primary/10 rounded-xl p-6 relative">
              <Quote className="absolute top-4 left-4 w-8 h-8 text-primary/30" />
              <blockquote className="text-lg text-dark-fg/90 italic pl-8">
                "A Beezzy não apenas nos tirou da crise, nos deu as ferramentas e 
                estratégias para nunca mais voltarmos a essa situação."
              </blockquote>
              <cite className="block text-sm text-primary mt-4 pl-8 not-italic font-medium">
                — Diretor Comercial, Nova Era Imóveis
              </cite>
            </div>
          </article>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            Quero resultados assim
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;
