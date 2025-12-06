import { 
  Sparkles, 
  Heart, 
  Handshake, 
  Megaphone,
  Film,
  Calendar,
  Star
} from "lucide-react";
import { programs } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Heart,
  Handshake,
  Megaphone,
  Film,
};

const ProgramsSection = () => {
  const highlightProgram = programs.find(p => p.status === "Highlight");
  const otherPrograms = programs.filter(p => p.status !== "Highlight");

  return (
    <section id="program" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Program Kerja Unggulan
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
            Apa yang Kami Lakukan?
          </h2>
          <p className="text-muted-foreground text-lg">
            Program strategis untuk mewujudkan perubahan sosial dan politik yang berkeadilan.
          </p>
        </div>

        {/* Highlight Program - Serikat Sospol */}
        {highlightProgram && (
          <div className="mb-8">
            <div className="p-8 sm:p-10 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                  <Badge className="bg-accent text-accent-foreground font-semibold">
                    Event Unggulan
                  </Badge>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-sm text-primary-foreground/70 uppercase tracking-wider">
                      {highlightProgram.category}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold mt-2 mb-4 font-display">
                      {highlightProgram.title}
                    </h3>
                    <p className="text-primary-foreground/80 leading-relaxed mb-6">
                      {highlightProgram.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary-foreground/70">
                      <Calendar className="w-5 h-5" />
                      <span className="font-medium">{highlightProgram.date}</span>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center animate-pulse-slow">
                      <Sparkles className="w-24 h-24 text-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {otherPrograms.map((program, index) => {
            const IconComponent = iconMap[program.icon];
            return (
              <div
                key={program.id}
                className="group p-6 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                    )}
                  </div>
                </div>
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {program.category}
                </span>
                <h3 className="text-lg font-bold text-foreground mt-1 mb-2">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="text-xs text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {program.date}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
