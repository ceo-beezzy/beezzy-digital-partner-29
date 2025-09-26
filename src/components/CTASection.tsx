import { TrendingUp, Calendar, Target, Award } from "lucide-react";

const CaseSuccessSection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center text-white">
          {/* Main Title */}
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
            Case de <span className="text-brand-accent">Sucesso</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light font-montserrat mb-12 opacity-90 max-w-3xl mx-auto">
            Como transformamos uma empresa em crise em uma história de recuperação e crescimento sustentável
          </p>

          {/* Case Study Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20 mb-12 text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-white">Imobiliária Nova Era</h3>
                <p className="text-brand-accent font-medium">De prejuízo a lucro em 90 dias</p>
              </div>
            </div>

            {/* Challenge */}
            <div className="mb-8">
              <h4 className="text-xl font-bold font-montserrat mb-4 text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-brand-accent" />
                O Desafio
              </h4>
              <p className="text-lg opacity-90 leading-relaxed">
                A Nova Era estava enfrentando mais de <strong className="text-brand-accent">8 meses consecutivos sem lucro</strong>, 
                com processos desorganizados, baixa conversão de leads e perda constante de clientes para a concorrência.
              </p>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <Calendar className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">3º</div>
                <div className="text-sm text-brand-accent font-medium">MÊS</div>
                <div className="text-sm opacity-80 mt-1">Retorno ao lucro</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <TrendingUp className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">245%</div>
                <div className="text-sm text-brand-accent font-medium">AUMENTO</div>
                <div className="text-sm opacity-80 mt-1">Conversão de leads</div>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 text-center">
                <Award className="w-8 h-8 text-brand-accent mx-auto mb-3" />
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-sm text-brand-accent font-medium">DIGITAL</div>
                <div className="text-sm opacity-80 mt-1">Processos automatizados</div>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-xl font-bold font-montserrat mb-4 text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-brand-accent" />
                A Transformação
              </h4>
              <p className="text-lg opacity-90 leading-relaxed">
                Implementamos uma <strong className="text-brand-accent">estratégia integrada</strong> combinando automação de processos, 
                otimização de marketing digital e reestruturação da gestão comercial. O resultado foi uma transformação completa 
                que não apenas trouxe a empresa de volta à lucratividade, mas estabeleceu bases sólidas para crescimento contínuo.
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="bg-brand-accent/20 backdrop-blur-sm rounded-2xl p-6 border border-brand-accent/30">
            <p className="text-lg font-medium font-montserrat">
              <span className="text-brand-accent">"A Beezzy não apenas nos tirou da crise,</span> nos deu as ferramentas e estratégias 
              para nunca mais voltarmos a essa situação. Hoje somos referência no mercado."
            </p>
            <p className="text-sm opacity-80 mt-2">— Diretor Comercial, Nova Era Imóveis</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseSuccessSection;