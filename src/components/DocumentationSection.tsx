import { eventDocumentation } from "@/data/siteData";
import { Calendar, MapPin, Users, Camera, FileText } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DocumentationSection = () => {
  return (
    <section id="dokumentasi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FileText className="w-4 h-4" />
            Transparansi & Akuntabilitas
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Dokumentasi Event
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Laporan kegiatan sebagai bentuk pertanggungjawaban kepada seluruh mahasiswa Polines.
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center bg-background border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">
                {eventDocumentation.length}
              </div>
              <div className="text-sm text-muted-foreground">Event Terlaksana</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">
                {eventDocumentation.reduce((acc, e) => acc + e.attendees, 0)}+
              </div>
              <div className="text-sm text-muted-foreground">Total Peserta</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">
                {new Set(eventDocumentation.map(e => e.category)).size}
              </div>
              <div className="text-sm text-muted-foreground">Jenis Kegiatan</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background border-border/50">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-1">
                {eventDocumentation.reduce((acc, e) => acc + e.images.length, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Foto Dokumentasi</div>
            </CardContent>
          </Card>
        </div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {eventDocumentation.map((event) => (
            <Card 
              key={event.id} 
              className="overflow-hidden bg-background border-border/50 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image Gallery Preview */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-3 gap-1">
                  {event.images.slice(0, 3).map((img, idx) => (
                    <div 
                      key={idx} 
                      className={`bg-muted-foreground/10 ${idx === 0 && event.images.length > 1 ? 'col-span-2 row-span-1' : ''}`}
                    >
                      <img 
                        src={img} 
                        alt={`${event.title} - ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ))}
                </div>
                <div className="absolute top-3 left-3">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded text-xs">
                  <Camera className="w-3 h-3" />
                  {event.images.length} Foto
                </div>
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {event.description}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-accent" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-accent" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-accent" />
                    {event.attendees} Peserta
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Transparency Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Seluruh dokumentasi dan laporan kegiatan dapat diakses oleh mahasiswa Polines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DocumentationSection;
