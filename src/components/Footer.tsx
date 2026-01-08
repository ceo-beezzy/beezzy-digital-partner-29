const Footer = () => {
  return (
    <footer className="bg-background border-t-2 border-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-serif font-bold text-foreground mb-4">BEEZZY</h3>
            <p className="text-muted-foreground font-body mb-6 max-w-md">
              Sua solução digital completa. Tornamos o complexo simples através de 
              soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-muted-foreground">
              <span>Be Easy</span>
              <span className="text-foreground">•</span>
              <span>Be Fast</span>
              <span className="text-foreground">•</span>
              <span>Be Customer Centric</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 text-foreground border-b border-foreground pb-2">
              Soluções
            </h4>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              <li>
                <a href="#advisor" className="hover:text-foreground transition-colors">
                  Advisor
                </a>
              </li>
              <li>
                <a href="#forge" className="hover:text-foreground transition-colors">
                  Forge
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-foreground transition-colors">
                  Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 text-foreground border-b border-foreground pb-2">
              Contato
            </h4>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t-2 border-foreground pt-8 text-center">
          <p className="text-muted-foreground font-body text-sm">
            &copy; {new Date().getFullYear()} Beezzy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
