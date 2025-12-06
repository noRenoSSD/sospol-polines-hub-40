import { Instagram, Mail, Phone, MapPin, Flame } from "lucide-react";
import { navLinks, cabinetInfo, socialLinks } from "@/data/siteData";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                <Flame className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <p className="font-bold text-lg">SosPol Polines</p>
                <p className="text-primary-foreground/60 text-sm">{cabinetInfo.name}</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 max-w-sm mb-6 leading-relaxed">
              {cabinetInfo.ministry} BEM Politeknik Negeri Semarang. 
              Penggerak roda intelektual untuk perubahan yang berkeadilan.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-bold text-lg mb-4">Alamat</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
              <p>
                Sekretariat BEM Polines<br />
                Jl. Prof. Sudarto, SH<br />
                Tembalang, Semarang<br />
                50275
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© 2025 {cabinetInfo.ministry} BEM Polines. All rights reserved.</p>
          <p>
            Made with ❤️ for Mahasiswa Polines
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
