import { Mail, Phone, Instagram, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Hubungi Kami
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Mari Berdiskusi
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Punya pertanyaan, aspirasi, atau ingin berkolaborasi? Jangan ragu untuk 
              menghubungi kami melalui berbagai kanal berikut.
            </p>

            <div className="space-y-4">
              <a
                href="https://instagram.com/sospolpolines"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Instagram</p>
                  <p className="text-sm text-muted-foreground">@sospolpolines</p>
                </div>
              </a>

              <a
                href="mailto:sospol@polines.ac.id"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground">sospol@polines.ac.id</p>
                </div>
              </a>

              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+62 812-3456-7890</p>
                </div>
              </a>
            </div>
          </div>

          {/* Aspirasi Box */}
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-2xl" />
            <div className="relative p-8 sm:p-10 rounded-2xl gradient-hero border border-white/10">
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Kotak Aspirasi
              </h3>
              <p className="text-white/70 mb-8 leading-relaxed">
                Sampaikan aspirasi, keluhan, atau masukan Anda terkait kehidupan kampus. 
                Suara Anda adalah prioritas kami. Identitas Anda akan dijaga kerahasiaannya.
              </p>
              <Button variant="hero" size="xl" className="w-full sm:w-auto">
                <Send className="mr-2 w-5 h-5" />
                Kirim Aspirasi
              </Button>
              <p className="text-white/50 text-sm mt-4">
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
