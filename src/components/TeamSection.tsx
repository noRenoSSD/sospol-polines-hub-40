import { teamMembers, cabinetInfo } from "@/data/siteData";
import { User } from "lucide-react";

const TeamSection = () => {
  return (
    <section id="tim" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            {cabinetInfo.name}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Tim {cabinetInfo.ministry}
          </h2>
          <p className="text-lg text-primary font-medium mb-2">
            Periode {cabinetInfo.period}
          </p>
          <p className="text-muted-foreground">
            {cabinetInfo.description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="group text-center w-full sm:w-auto"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mb-5 mx-auto w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden bg-muted group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <User className="w-16 h-16 text-muted-foreground/50" />
                </div>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-accent font-medium">
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
