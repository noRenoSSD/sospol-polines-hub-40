import { Search, Megaphone, Heart, ArrowRight } from "lucide-react";
import { cabinetInfo, roleCards } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search,
  Megaphone,
  Heart,
};

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
            Peran & Fungsi
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {cabinetInfo.description}
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {roleCards.map((card) => {
            const IconComponent = iconMap[card.icon];
            return (
              <div
                key={card.id}
                className="group p-8 rounded-2xl bg-card shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {IconComponent && (
                    <IconComponent className="w-7 h-7 text-primary-foreground" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {card.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {card.description}
                </p>
                <button className="inline-flex items-center text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-1 w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Philosophy Quote */}
        <div className="mt-16 p-8 sm:p-12 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-2xl" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl sm:text-3xl font-display font-bold mb-4 leading-relaxed">
              "Intelektual yang kritis, berani, dan humanis untuk perubahan sosial yang berkeadilan."
            </blockquote>
            <cite className="text-primary-foreground/70 text-sm">
              — Filosofi {cabinetInfo.name}
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
