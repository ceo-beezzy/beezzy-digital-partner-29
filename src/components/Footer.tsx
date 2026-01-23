import { ArrowUpRight, Linkedin, Instagram, Mail } from "lucide-react";
import beezzyLogo from "@/assets/beezzy-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12 sm:py-16 md:py-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-5">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <img src={beezzyLogo} alt="Beezzy" className="h-6 sm:h-8 w-auto" />
              <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-wider text-primary text-glow">BEEZZY</span>
            </div>
            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-sm leading-relaxed text-sm sm:text-base">
              Sua solução digital completa. Tornamos o complexo simples através de 
              soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-2 sm:gap-3">
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 sm:w-12 sm:h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base sm:text-lg tracking-wider mb-4 sm:mb-6 text-foreground uppercase">
              SOLUÇÕES
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#advisor" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Advisor
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#forge" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Forge
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#growth" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Growth
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-base sm:text-lg tracking-wider mb-4 sm:mb-6 text-foreground uppercase">
              EMPRESA
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Sobre nós
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Cases
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Blog
                  <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h4 className="font-display text-base sm:text-lg tracking-wider mb-4 sm:mb-6 text-foreground uppercase">
              CONTATO
            </h4>
            <ul className="space-y-3 sm:space-y-4 text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
            <button className="btn-neon py-2 sm:py-3 px-4 sm:px-6 text-[10px] sm:text-xs w-full sm:w-auto">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            &copy; {currentYear} Beezzy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
