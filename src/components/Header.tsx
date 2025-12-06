import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/siteData";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-soft border-b border-border/50 py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
            <Flame className="w-5 h-5 text-accent-foreground" />
          </div>
          <div className="hidden sm:block">
            <p className="font-bold text-sm text-foreground">
              SosPol Polines
            </p>
            <p className="text-xs text-muted-foreground">
              Kabinet Lentera Asa
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Lapor Isu
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl mt-2 mx-4 rounded-xl p-4 shadow-card border border-border/50 animate-fade-in">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Lapor Isu
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
