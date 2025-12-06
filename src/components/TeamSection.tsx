import { teamMembers, cabinetInfo } from "@/data/siteData";
import { User } from "lucide-react";

const TeamSection = () => {
  const leadership = teamMembers.filter(m => m.level === 1);
  const menko = teamMembers.filter(m => m.level === 2);
  const deputies = teamMembers.filter(m => m.level === 3);

  return (
    <section id="tim" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Struktur Organisasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
            {cabinetInfo.name}
          </h2>
          <p className="text-lg text-primary font-medium mb-2">
            {cabinetInfo.ministry} • {cabinetInfo.period}
          </p>
          <p className="text-muted-foreground">
            Tim yang berkomitmen memperjuangkan aspirasi mahasiswa Polines.
          </p>
        </div>

        {/* Leadership Level */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
          {leadership.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-5 mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border-2 border-accent/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-16 h-16 text-muted-foreground/40" />
                </div>
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent font-semibold">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Menko Level */}
        <div className="flex justify-center mb-12">
          {menko.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 mx-auto w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-12 h-12 text-muted-foreground/40" />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Deputies Level */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {deputies.map((member, index) => (
            <div
              key={member.id}
              className="group text-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-3 mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="absolute inset-0 flex items-center justify-center">
                  <User className="w-8 h-8 text-muted-foreground/30" />
                </div>
              </div>
              <p className="text-xs text-muted-foreground font-medium">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
