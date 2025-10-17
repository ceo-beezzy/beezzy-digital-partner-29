import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-brand-cream py-16 border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-brand-accent" />
              <h3 className="text-2xl font-bold font-montserrat">Beezzy</h3>
            </div>
            <p className="text-brand-cream/70 mb-6 max-w-md font-montserrat">
              Sua solução digital completa. Tornamos o complexo simples através de soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-6 text-sm text-brand-cream/60">
              <span>Be Easy</span>
              <span>•</span>
              <span>Be Fast</span>
              <span>•</span>
              <span>Be Customer Centric</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold font-montserrat mb-4">Soluções</h4>
            <ul className="space-y-2 text-brand-cream/70 text-sm">
              <li>
                <a href="#advisor" className="hover:text-brand-accent transition-colors duration-300">
                  Advisor
                </a>
              </li>
              <li>
                <a href="#forge" className="hover:text-brand-accent transition-colors duration-300">
                  Forge
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-brand-accent transition-colors duration-300">
                  Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-montserrat mb-4">Contato</h4>
            <ul className="space-y-2 text-brand-cream/70 text-sm">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-brand-cream/20 mt-12 pt-8 text-center text-brand-cream/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Beezzy. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;