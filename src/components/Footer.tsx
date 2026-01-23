import { ArrowUpRight, Linkedin, Instagram, Mail } from "lucide-react";
import beezzyLogo from "@/assets/beezzy-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img src={beezzyLogo} alt="Beezzy" className="h-8 w-auto" />
              <span className="font-display text-3xl tracking-wider text-primary text-glow">BEEZZY</span>
            </div>
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Sua solução digital completa. Tornamos o complexo simples através de 
              soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">
              SOLUÇÕES
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="#advisor" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Advisor
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#forge" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Forge
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#growth" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Growth
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">
              EMPRESA
            </h4>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Sobre nós
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Cases
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Blog
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-display text-lg tracking-wider mb-6 text-foreground">
              CONTATO
            </h4>
            <ul className="space-y-4 text-muted-foreground mb-8">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
            <button className="btn-neon py-3 px-6 text-xs">
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Beezzy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
