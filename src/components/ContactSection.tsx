import { Mail, Phone, Instagram, MessageCircle, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/data/siteData";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
              Mari Berdiskusi
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Punya pertanyaan, aspirasi, atau ingin berkolaborasi? Jangan ragu untuk 
              menghubungi kami melalui berbagai kanal berikut.
            </p>

            <div className="space-y-4">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">@sospol.bempolines</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>

              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">{socialLinks.email}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${socialLinks.whatsapp.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-soft transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">{socialLinks.whatsapp}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </a>
            </div>
          </div>

          {/* Aspirasi Box */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" />
            <div className="relative p-8 sm:p-10 rounded-2xl bg-primary border border-primary-foreground/10">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4 font-display">
                Kotak Aspirasi
              </h3>
              <p className="text-primary-foreground/70 mb-8 leading-relaxed">
                Sampaikan aspirasi, keluhan, atau masukan Anda terkait kehidupan kampus. 
                Suara Anda adalah prioritas kami. Identitas Anda akan dijaga kerahasiaannya.
              </p>
              <Button size="xl" className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                <Send className="mr-2 w-5 h-5" />
                Kirim Aspirasi
              </Button>
              <p className="text-primary-foreground/50 text-sm mt-4">
                * Terhubung dengan Google Form
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
