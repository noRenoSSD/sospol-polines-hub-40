import { Target, Eye, Users, Scale } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kementerian Sosial & Politik
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Kementerian Sosial dan Politik (SosPol) BEM Politeknik Negeri Semarang adalah 
            wadah perjuangan mahasiswa dalam mengawal isu-isu strategis, mengadvokasi 
            kebijakan, dan membangun kesadaran politik yang kritis di lingkungan kampus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="group p-8 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Visi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Menjadi motor penggerak kesadaran politik mahasiswa yang kritis, progresif, 
              dan berintegritas dalam memperjuangkan keadilan sosial di lingkungan kampus 
              dan masyarakat luas.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group p-8 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-7 h-7 text-accent-foreground" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Misi</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                Mengadvokasi hak-hak mahasiswa dan kebijakan kampus yang berkeadilan
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                Melakukan kajian dan publikasi isu sosial-politik
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                Membangun solidaritas dan kepedulian sosial mahasiswa
              </li>
            </ul>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {[
            { icon: Scale, label: "Keadilan", desc: "Memperjuangkan kesetaraan" },
            { icon: Users, label: "Solidaritas", desc: "Bersatu dalam perjuangan" },
            { icon: Eye, label: "Transparansi", desc: "Keterbukaan informasi" },
            { icon: Target, label: "Integritas", desc: "Konsisten dalam prinsip" },
          ].map((value, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-secondary/50 text-center group hover:bg-secondary transition-colors"
            >
              <value.icon className="w-8 h-8 mx-auto mb-3 text-accent group-hover:scale-110 transition-transform" />
              <p className="font-semibold text-foreground">{value.label}</p>
              <p className="text-sm text-muted-foreground">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
