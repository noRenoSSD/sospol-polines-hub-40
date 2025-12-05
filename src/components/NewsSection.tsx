import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/siteData";

const NewsSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <section id="kajian" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Kajian & Press Release
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Publikasi Terbaru
            </h2>
          </div>
          <Button variant="outline">
            Lihat Semua
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Article */}
          <div className="row-span-2 group">
            <div className="h-full p-6 sm:p-8 rounded-2xl bg-primary text-primary-foreground relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-sm font-medium mb-6">
                  {articles[0].category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                  {articles[0].title}
                </h3>
                <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                  {articles[0].summary}
                </p>
                <div className="flex items-center gap-2 text-sm text-primary-foreground/60 mb-6">
                  <Calendar className="w-4 h-4" />
                  {formatDate(articles[0].date)}
                </div>
                <Button variant="hero-outline" size="lg">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Other Articles */}
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="group p-6 rounded-2xl gradient-card shadow-card border border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium mb-4">
                {article.category}
              </span>
              <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {article.summary}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(article.date)}
                </div>
                <Button variant="ghost" size="sm" className="text-accent">
                  Baca
                  <ArrowRight className="ml-1 w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
