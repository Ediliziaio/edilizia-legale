import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import ELFinalCTA from "@/components/ELFinalCTA";
import ELVerticali from "@/components/ELVerticali";
import Reveal from "@/components/Reveal";
import { AreaCard } from "@/components/ELServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { areePrivati } from "@/data/aree";
import ELImageSlot from "@/components/ELImageSlot";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL } from "@/data/site";

const Privati = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const guidePrivati = articlesMeta.filter((a) => a.category === "Privati" || a.category === "Verticali");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Assistenza legale a committenti e privati nei contenziosi edilizi",
    "provider": { "@id": `${SITE_URL}/#studio` },
    "areaServed": { "@type": "Country", "name": "Italia" },
    "audience": { "@type": "Audience", "audienceType": "Committenti privati, acquirenti di immobili, condòmini" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Aree di assistenza per i privati",
      "itemListElement": areePrivati.map((a) => ({
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
      { "@type": "ListItem", "position": 2, "name": "Per i privati", "item": `${SITE_URL}/privati` },
    ],
  };

  return (
    <>
      <SEO
        title="Avvocato contro Impresa Edile: Difetti, Ritardi, Contratti | Edilizia Legale"
        description="Assistenza legale ai privati: difetti costruttivi e garanzia decennale, cantiere abbandonato, preventivo sforato, fotovoltaico, Superbonus e decreto ingiuntivo."
        keywords="avvocato contro impresa edile, difetti costruttivi casa nuova, impresa sparita, preventivo sforato, avvocato difetti costruttivi, opposizione decreto ingiuntivo"
        canonical="https://www.edilizialegale.it/privati"
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
                  <Home className="w-4 h-4 text-gold" />
                  Area privati
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  La casa è tua. <span className="text-gold">I tuoi diritti anche.</span>
                </h1>
                <p className="text-lg text-white/80 mb-4 leading-relaxed">
                  Prima di cercare un avvocato vuoi capire se hai ragione. È normale. Per questo ogni area qui
                  sotto è collegata a una guida che spiega termini, strade e costi — con le parole di chi il
                  problema ce l'ha in casa, non con quelle degli atti.
                </p>
                <p className="text-sm text-white/60 mb-8">
                  Una cosa però va detta subito: mentre il costruttore "manda un tecnico" e ti rassicura a voce,
                  i termini corrono. 60 giorni per i vizi, un anno dalla scoperta per i difetti gravi, 40 giorni
                  per un decreto ingiuntivo. Chi aspetta troppo non perde la ragione: perde il diritto.
                </p>
                <Button
                  onClick={openContact}
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-6"
                >
                  Raccontaci il tuo caso <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <ELImageSlot id="privati-hero" tone="dark" className="hidden lg:flex rounded-2xl aspect-[4/3]" />
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-8 leading-tight">
                  Le dieci aree di assistenza ai privati
                </h2>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {areePrivati.map((a, i) => (
                  <Reveal key={a.title} delay={(i % 3) * 80}>
                    <AreaCard area={a} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          <ELVerticali />

          {/* Guide per i privati */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                    Le guide più lette dai committenti
                  </h2>
                  <Link to="/guide" className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark shrink-0">
                    Tutte le guide <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {guidePrivati.slice(0, 6).map((a, i) => (
                  <Reveal key={a.slug} delay={(i % 3) * 80}>
                    <Link
                      to={`/guide/${a.slug}`}
                      className="group block bg-white hover:bg-white rounded-xl p-6 border border-border hover:border-gold hover:shadow-card transition-all h-full"
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

export default Privati;
