import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import ELFinalCTA from "@/components/ELFinalCTA";
import Reveal from "@/components/Reveal";
import { BookOpen, ArrowRight, Clock, Calendar } from "lucide-react";
import { articlesMeta, type Category } from "@/data/articles";
import { SITE_URL } from "@/data/site";

const categories: ("Tutte" | Category)[] = ["Tutte", "Imprese", "Privati", "Verticali", "Tributario"];

const catLabel: Record<string, string> = {
  Tutte: "Tutte le guide",
  Imprese: "Per le imprese",
  Privati: "Per i privati",
  Verticali: "Verticali di settore",
  Tributario: "Fisco e bonus",
};

const Guide = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [filter, setFilter] = useState<string>("Tutte");

  const filtered = filter === "Tutte" ? articlesMeta : articlesMeta.filter((a) => a.category === filter);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Guide", "item": `${SITE_URL}/guide` },
    ],
  };

  const listSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Guide di diritto dell'edilizia",
    "itemListElement": articlesMeta.map((a, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `${SITE_URL}/guide/${a.slug}`,
      "name": a.title,
    })),
  };

  return (
    <>
      <SEO
        title="Guide di Diritto dell'Edilizia: Appalti, Vizi, Crediti | Edilizia Legale"
        description="Guide pratiche su appalti, difetti costruttivi, recupero crediti, DURC, Superbonus e verticali di settore. Termini, passi operativi e riferimenti normativi."
        keywords="guide diritto edilizia, appalto privato, difetti costruttivi, recupero crediti edilizia, garanzia decennale, superbonus contenzioso"
        canonical="https://www.edilizialegale.it/guide"
        jsonLd={[breadcrumbSchema, listSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <ELHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <BookOpen className="w-4 h-4 text-gold" />
                  Guide
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                  Le guide di <span className="text-gold">diritto dell'edilizia</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Ogni guida risponde a una domanda precisa: quali termini corrono, quali strade esistono, quali
                  errori chiudono la partita. Con i riferimenti normativi e un esempio concreto, sempre.
                </p>
              </div>
            </div>
          </section>

          {/* Filtri + griglia */}
          <section className="py-12 lg:py-16 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setFilter(c)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
                      filter === c
                        ? "bg-navy text-white border-navy"
                        : "bg-white text-foreground/70 border-border hover:border-navy hover:text-navy"
                    }`}
                  >
                    {catLabel[c]}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 60}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-border hover:border-gold hover:shadow-card flex flex-col h-full"
                    >
                      <div className={`h-2 bg-gradient-to-r ${a.cover}`} />
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-gold/10 text-gold-dark text-[10px] font-bold uppercase tracking-wider">
                            {a.category}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-foreground/50">
                            <Clock className="w-3.5 h-3.5" /> {a.readTime}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-foreground/50">
                            <Calendar className="w-3.5 h-3.5" /> {a.date}
                          </span>
                        </div>
                        <h2 className="text-lg font-bold text-navy mb-2 leading-snug group-hover:text-gold-dark">
                          {a.title}
                        </h2>
                        <p className="text-sm text-foreground/70 leading-relaxed mb-4 flex-1 line-clamp-3">
                          {a.excerpt}
                        </p>
                        <span className="text-sm font-semibold text-navy group-hover:text-gold-dark flex items-center gap-1 mt-auto">
                          Leggi la guida <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <ELFinalCTA onOpenContact={() => setIsContactOpen(true)} />
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default Guide;
