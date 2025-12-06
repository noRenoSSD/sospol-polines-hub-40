import { ArrowRight, Megaphone, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cabinetInfo } from "@/data/siteData";

const HeroSection = () => {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Navy diagonal shape */}
        <div className="absolute -right-1/4 -top-1/4 w-[800px] h-[800px] bg-primary rounded-full opacity-5" />
        <div className="absolute -left-1/4 -bottom-1/4 w-[600px] h-[600px] bg-primary rounded-full opacity-5" />
        
        {/* Gold accent glow */}
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8 animate-fade-in">
            <Flame className="w-4 h-4 text-accent" />
            <span className="text-primary font-medium text-sm">
              {cabinetInfo.name} • {cabinetInfo.period}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="font-display">{cabinetInfo.ministry}</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {cabinetInfo.tagline}
          </p>

          <p className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.25s" }}>
            BEM Politeknik Negeri Semarang
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="xl" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-lg shadow-accent/20">
              <Megaphone className="mr-2 w-5 h-5" />
              Lihat Propaganda Kreatif
            </Button>
            <Button variant="outline" size="xl" className="border-primary/20 hover:bg-primary hover:text-primary-foreground">
              Lapor Isu (Advokasi)
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { number: "50+", label: "Kajian Dipublikasi" },
              { number: "20+", label: "Aksi Advokasi" },
              { number: "1000+", label: "Aspirasi Ditampung" },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-2xl bg-secondary/50">
                <p className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
