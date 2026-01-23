import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import beezzyLogo from "@/assets/beezzy-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Soluções", href: "#services" },
    { label: "Resultados", href: "#stats" },
    { label: "Metodologia", href: "#methodology" },
    { label: "Cases", href: "#cases" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img src={beezzyLogo} alt="Beezzy" className="h-6 sm:h-8 w-auto" />
            <span className="font-display text-xl sm:text-2xl tracking-wider text-foreground">
              BEEZZY
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button className="btn-neon text-[10px] xl:text-xs py-2 xl:py-3 px-4 xl:px-6">
              Fale Conosco
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-16 sm:top-20 left-0 right-0 bg-background border-b border-border py-4 sm:py-6">
            <div className="flex flex-col gap-3 sm:gap-4 px-4 sm:px-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs sm:text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="btn-neon text-[10px] sm:text-xs py-2 sm:py-3 px-4 sm:px-6 mt-2 sm:mt-4 w-full">
                Fale Conosco
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
