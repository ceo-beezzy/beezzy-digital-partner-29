import { ArrowUpRight, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-gradient py-20 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <h3 className="text-3xl font-bold mb-4 text-gradient-primary">BEEZZY</h3>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Sua solução digital completa. Tornamos o complexo simples através de 
              soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram className="w-4 h-4 text-foreground" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail className="w-4 h-4 text-foreground" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">
              Soluções
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#advisor" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Advisor
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#forge" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Forge
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#growth" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Growth
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">
              Empresa
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Sobre nós
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Cases
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors group">
                  Blog
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-semibold text-sm uppercase tracking-widest mb-4 text-foreground">
              Contato
            </h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
            <button className="btn-primary mt-6 py-3 px-6 text-sm">
              Fale conosco
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Beezzy. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
