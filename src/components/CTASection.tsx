const CaseSuccessSection = () => {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-background/60">Seção VI</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4">
            Case de Sucesso
          </h2>
          <div className="w-24 h-0.5 bg-background mx-auto mb-6"></div>
          <p className="text-lg text-background/70 font-body italic">
            Uma história real de transformação empresarial
          </p>
        </div>

        {/* Case Study */}
        <div className="max-w-4xl mx-auto">
          <article className="border-t border-b border-background/30 py-12">
            {/* Headline */}
            <div className="text-center mb-12">
              <span className="text-xs uppercase tracking-widest text-background/60 mb-4 block">Imobiliária Nova Era</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                De prejuízo a lucro em 90 dias
              </h3>
              <p className="text-background/70 font-body text-lg">
                Como transformamos uma empresa em crise em uma história de recuperação e crescimento sustentável
              </p>
            </div>

            {/* Challenge and Solution - Editorial layout */}
            <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 border-b border-background/30 pb-2">
                  O Desafio
                </h4>
                <p className="text-background/80 font-body leading-relaxed">
                  A Nova Era enfrentava mais de 8 meses consecutivos sem lucro, 
                  com processos desorganizados, baixa conversão de leads e perda 
                  constante de clientes para a concorrência.
                </p>
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 border-b border-background/30 pb-2">
                  A Transformação
                </h4>
                <p className="text-background/80 font-body leading-relaxed">
                  Implementamos uma estratégia integrada combinando automação de processos, 
                  otimização de marketing digital e reestruturação da gestão comercial.
                </p>
              </div>
            </div>

            {/* Results */}
            <div className="grid grid-cols-3 gap-0 border-t border-b border-background/30 py-8">
              <div className="text-center border-r border-background/30">
                <div className="text-4xl font-serif font-bold mb-1">3º</div>
                <div className="text-xs uppercase tracking-widest text-background/60">Mês</div>
                <div className="text-sm text-background/70 font-body mt-1">Retorno ao lucro</div>
              </div>
              <div className="text-center border-r border-background/30">
                <div className="text-4xl font-serif font-bold mb-1">245%</div>
                <div className="text-xs uppercase tracking-widest text-background/60">Aumento</div>
                <div className="text-sm text-background/70 font-body mt-1">Conversão de leads</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-serif font-bold mb-1">100%</div>
                <div className="text-xs uppercase tracking-widest text-background/60">Digital</div>
                <div className="text-sm text-background/70 font-body mt-1">Processos automatizados</div>
              </div>
            </div>
          </article>

          {/* Testimonial */}
          <div className="text-center pt-12">
            <blockquote className="text-xl md:text-2xl font-body italic text-background/90 mb-4">
              "A Beezzy não apenas nos tirou da crise, nos deu as ferramentas e 
              estratégias para nunca mais voltarmos a essa situação."
            </blockquote>
            <cite className="text-sm text-background/60 font-body not-italic">
              — Diretor Comercial, Nova Era Imóveis
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;
