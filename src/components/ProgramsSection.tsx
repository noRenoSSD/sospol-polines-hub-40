import { 
  Sparkles, 
  Heart, 
  Handshake, 
  Megaphone 
} from "lucide-react";
import { programs } from "@/data/siteData";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Heart,
  Handshake,
  Megaphone,
};

const ProgramsSection = () => {
  return (
    <section id="program" className="py-20 lg:py-28 gradient-hero">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white/90 text-sm font-semibold mb-4">
            Program Kerja
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Apa yang Kami Lakukan?
          </h2>
          <p className="text-white/70 text-lg">
            Berbagai program strategis untuk mewujudkan visi misi kami dalam 
            mengadvokasi dan memberdayakan mahasiswa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const IconComponent = iconMap[program.icon];
            return (
              <div
                key={program.id}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-accent" />
                    )}
                  </div>
                  <Badge 
                    variant={program.status === "Upcoming" ? "default" : "secondary"}
                    className={program.status === "Upcoming" ? "bg-accent text-white" : "bg-white/20 text-white"}
                  >
                    {program.status}
                  </Badge>
                </div>
                <span className="text-xs text-accent font-medium uppercase tracking-wider">
                  {program.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">
                  {program.title}
                </h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  {program.description}
                </p>
                <div className="text-sm text-white/50">
                  📅 {program.date}
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
