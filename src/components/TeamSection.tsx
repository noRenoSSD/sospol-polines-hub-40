import { teamMembers } from "@/data/siteData";
import { User } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="tim" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Struktur Organisasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tim Kementerian SosPol
          </h2>
          <p className="text-muted-foreground text-lg">
            Para penggerak yang berkomitmen memperjuangkan aspirasi mahasiswa Polines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-4 mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-muted group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
              </div>
              <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
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
