const Footer = () => {
  return (
    <footer className="bg-dark-bg text-dark-fg py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-4xl font-serif font-bold mb-4">BEEZZY</h3>
            <p className="text-dark-muted font-body mb-6 max-w-md">
              Sua solução digital completa. Tornamos o complexo simples através de 
              soluções inovadoras que impulsionam o crescimento do seu negócio.
            </p>
            <div className="flex items-center gap-4 text-xs uppercase tracking-widest text-dark-muted">
              <span className="text-primary">Be Easy</span>
              <span className="text-primary">•</span>
              <span className="text-primary">Be Fast</span>
              <span className="text-primary">•</span>
              <span className="text-primary">Be Customer Centric</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 text-primary border-b border-primary/50 pb-2">
              Soluções
            </h4>
            <ul className="space-y-2 text-dark-muted font-body text-sm">
              <li>
                <a href="#advisor" className="hover:text-primary transition-colors">
                  Advisor
                </a>
              </li>
              <li>
                <a href="#forge" className="hover:text-primary transition-colors">
                  Forge
                </a>
              </li>
              <li>
                <a href="#growth" className="hover:text-primary transition-colors">
                  Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-sm uppercase tracking-widest mb-4 text-primary border-b border-primary/50 pb-2">
              Contato
            </h4>
            <ul className="space-y-2 text-dark-muted font-body text-sm">
              <li>contato@beezzy.com</li>
              <li>(11) 9999-9999</li>
              <li>São Paulo, SP</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-muted/30 pt-8 text-center">
          <p className="text-dark-muted font-body text-sm">
            &copy; {new Date().getFullYear()} Beezzy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
