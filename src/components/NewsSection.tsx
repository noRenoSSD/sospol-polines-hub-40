import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/siteData";

const tagColors: Record<string, string> = {
  "Politik": "bg-blue-100 text-blue-700",
  "Sosial": "bg-green-100 text-green-700",
  "Perempuan": "bg-pink-100 text-pink-700",
  "Kampus": "bg-amber-100 text-amber-700",
};

const NewsSection = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section id="kajian" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
              Kajian & Propaganda
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-display">
              Publikasi Terbaru
            </h2>
          </div>
          <Button variant="outline" className="border-primary/20">
            Lihat Semua
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>

        {/* Instagram-style Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className={`group rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              {/* Article Image Placeholder */}
              <div className={`bg-gradient-to-br from-primary/10 to-accent/10 ${index === 0 ? "h-48 sm:h-64" : "h-32"}`}>
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-4xl">{index === 0 ? "📰" : "📝"}</span>
                </div>
              </div>
              
              <div className={`p-4 ${index === 0 ? "sm:p-6" : ""}`}>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${tagColors[tag] || "bg-gray-100 text-gray-700"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Category Badge */}
                <Badge variant="secondary" className="mb-2 text-xs">
                  {article.category}
                </Badge>
                
                <h3 className={`font-bold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2 ${index === 0 ? "text-xl sm:text-2xl" : "text-sm"}`}>
                  {article.title}
                </h3>
                
                {index === 0 && (
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.summary}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5" />
                    {formatDate(article.date)}
                  </div>
                  <Button variant="ghost" size="sm" className="text-accent h-auto p-0">
                    Baca
                    <ArrowRight className="ml-1 w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
