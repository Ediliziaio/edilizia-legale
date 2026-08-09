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
import { AreaCard } from "@/components/ELServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2 } from "lucide-react";
import { areeImprese } from "@/data/aree";
import ELImageSlot from "@/components/ELImageSlot";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";

const SEGMENTI = [
  "Impresa generale e appaltatore",
  "Subappaltatori e artigiani specializzati",
  "Costruttori-venditori e developer",
  "General contractor da bonus fiscali",
  "Imprese che lavorano con la PA",
];

const Imprese = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guideImprese = articlesMeta.filter((a) => a.category === "Imprese" || a.category === "Tributario");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Assistenza legale per imprese edili",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "BusinessAudience", "audienceType": "Imprese edili, subappaltatori, artigiani" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per le imprese",
      "itemListElement": areeImprese.map((a) => ({
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": a.title },
      })),
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Per le imprese", "item": `${SITE_URL}/imprese` },
    ],
  };

  return (
    <>
      <SEO
        title="Avvocato per Imprese Edili: Appalti, Crediti, Fisco | Edilizia Legale"
        description="Assistenza legale alle imprese edili: recupero crediti, riserve e varianti, difesa da contestazioni di vizi, DURC, accertamenti Superbonus, appalti pubblici."
        keywords="avvocato per imprese edili, recupero crediti edilizia, impresa edile non pagata, riserve appalto, durc irregolare, accertamento superbonus impresa"
        canonical="https://www.edilizialegale.it/imprese"
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <ELHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <Building2 className="w-4 h-4 text-gold" />
                  Area imprese
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  L'avvocato dell'impresa edile, <span className="text-gold">dal contratto all'incasso.</span>
                </h1>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Il problema non è "la contrattualistica". Il problema è che hai 23.000 euro di saldo fermi da
                  cinque mesi, un DURC che blocca la gara, o un atto da 400.000 euro sul Superbonus. Le dieci aree
                  qui sotto partono da lì: ordinate per urgenza, non per eleganza giuridica.
                </p>
                <p className="text-sm text-white/60 mb-8">
                  Lavoriamo con: {SEGMENTI.join(" · ").toLowerCase()}.
                </p>
                <Button
                  onClick={openContact}
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-6"
                >
                  Mandaci il fascicolo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <ELImageSlot id="imprese-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-8 leading-tight">
                  Le dieci aree di assistenza alle imprese
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areeImprese.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Guide per le imprese */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                    Le guide per chi fa impresa in cantiere
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guideImprese.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-muted/40 hover:bg-white rounded-xl p-6 border border-border hover:border-gold hover:shadow-card transition-all h-full"
                    >
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold-dark">{a.category}</span>
                      <h3 className="font-bold text-navy mt-2 mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <ELFinalCTA onOpenContact={openContact} />
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Imprese;
