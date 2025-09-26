import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main CTA */}
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-6 leading-tight">
            Vamos Transformar
            <span className="block">Seu Negócio Juntos?</span>
          </h2>
          
          <p className="text-xl md:text-2xl font-light font-montserrat mb-12 opacity-90 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ser o parceiro estratégico que sua empresa precisa para prosperar no mundo digital.
          </p>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <Mail className="w-8 h-8 mx-auto mb-4 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold font-montserrat mb-2">Email</h3>
              <p className="text-sm opacity-80">contato@beezzy.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
              <Phone className="w-8 h-8 mx-auto mb-4 text-brand-accent group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold font-montserrat mb-2">Telefone</h3>
              <p className="text-sm opacity-80">(11) 9999-9999</p>
            </div>
          </div>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              className="px-12 py-6 text-lg font-semibold bg-white text-brand-primary hover:bg-white/90 shadow-large hover:shadow-glow hover:scale-105"
            >
              Solicitar Proposta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="border-t border-white/20 pt-8">
            <p className="text-sm opacity-70 mb-4 font-montserrat">
              Já transformamos mais de 100 empresas
            </p>
            <div className="flex justify-center items-center gap-8 text-sm opacity-60 flex-wrap">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                Consultoria gratuita
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-accent rounded-full" />
                Sem compromisso
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;