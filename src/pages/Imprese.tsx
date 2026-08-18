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
import { ArrowRight, Building2, Phone, ShieldCheck, FileCheck, Scale, Quote } from "lucide-react";
import { areeImprese } from "@/data/aree";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL, PHONE_TEL, PHONE_DISPLAY } from "@/data/site";

const SEGMENTI = [
  "Imprese generali e appaltatori",
  "Subappaltatori e artigiani specializzati",
  "Costruttori-venditori e developer",
  "General contractor da bonus fiscali",
  "Imprese che lavorano con la PA",
];

/** Tre segnali di competenza, verificabili — niente promesse di risultato. */
const GARANZIE = [
  { icon: FileCheck, text: "Nessuna azione prima di aver letto il fascicolo" },
  { icon: Scale, text: "Civile, tributario e penale nello stesso fascicolo" },
  { icon: ShieldCheck, text: "Verifica dei conflitti di interesse su ogni incarico" },
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
        description="Assistenza legale alle imprese edili: recupero crediti, riserve e varianti, difesa da contestazioni di vizi, DURC, contenzioso tributario e appalti pubblici."
        keywords="avvocato per imprese edili, recupero crediti edilizia, impresa edile non pagata, riserve appalto, durc irregolare, accertamento superbonus impresa"
        canonical="https://www.edilizialegale.it/imprese"
        jsonLd={[serviceSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main id="contenuto" className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <ELHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                    <Building2 className="w-4 h-4 text-gold" />
                    Avvocato per imprese edili
                  </div>
                  <h1 className="font-bold tracking-tight mb-6">
                    <span className="block text-xl md:text-2xl font-semibold text-white/80 leading-snug mb-4">
                      Hai un'impresa edile — ristrutturazioni, serramenti, fotovoltaico, impianti, opere pubbliche?
                    </span>
                    <span className="block text-3xl md:text-5xl leading-[1.12]">
                      Il saldo non arriva. I lavori te li contestano. Il DURC ti blocca la gara.
                      Il Fisco ti contesta i{"\u00A0"}crediti.
                    </span>
                    <span className="block text-gold text-2xl md:text-3xl mt-4 leading-snug">
                      Scopri cosa puoi ancora fare — e quanto tempo ti resta per farlo.
                    </span>
                  </h1>
                  <p className="text-lg text-white/85 mb-4 leading-relaxed">
                    Un saldo da 23.000 euro fermo da cinque mesi. Un avviso dell'Agenzia da 400.000 euro, con i
                    crediti d'imposta bloccati nel cassetto fiscale e la banca che intanto stringe il fido. Un
                    committente che va in concordato e ti lascia il cantiere a metà.
                  </p>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    Problemi diversi, stesso tavolo: si decidono sulle carte, non al telefono. E le carte hanno una
                    scadenza. Mentre aspetti che qualcuno “sistemi”, i termini corrono. Sempre dalla parte di chi
                    non paga.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <Button
                      onClick={openContact}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-6 w-full sm:w-auto"
                    >
                      Mandaci il fascicolo <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                      <Button
                        variant="outline"
                        size="lg"
                        className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold text-base h-12 px-6 w-full"
                      >
                        <Phone className="mr-2 w-4 h-4" />
                        {PHONE_DISPLAY}
                      </Button>
                    </a>
                  </div>
                  <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                    Contratto, SAL, PEC, foto, messaggi: mandaci quello che hai. Entro 48 ore lavorative sai quali
                    termini corrono, quali strade sono ancora aperte e se conviene muoversi.
                  </p>
                </div>

                {/* Il caso tipo: dimostra il metodo in tre secondi, senza promettere esiti */}
                <aside className="bg-white/[0.07] backdrop-blur rounded-2xl border border-white/15 p-6 lg:p-7">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-gold mb-4">
                    Il caso che arriva più spesso
                  </p>
                  <div className="relative pl-7 mb-5">
                    <Quote className="w-5 h-5 text-gold/50 absolute left-0 top-0.5" />
                    <p className="text-white/85 leading-relaxed italic">
                      Lavori consegnati a marzo. Saldo da 23.000 euro fermo. Il committente parla di finiture da
                      rivedere, ma per iscritto non ha mai contestato niente.
                    </p>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed mb-5">
                    <span className="font-semibold text-white">La prima cosa che guardiamo non sono le finiture. Sono le date.</span>{" "}
                    Se la denuncia dei vizi occulti arriva oltre 60 giorni dalla scoperta è tardiva, e l'eccezione
                    con cui trattiene il saldo perde base — anche quando un difetto c'è davvero (art. 1667 c.c.).
                  </p>
                  <Link
                    to="/guide/committente-contesta-i-lavori"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-white transition-colors"
                  >
                    Il committente contesta per non pagare <ArrowRight className="w-4 h-4" />
                  </Link>
                </aside>
              </div>

              {/* Segmenti serviti + segnali di competenza */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider font-bold text-white/50 mb-3">Lavoriamo con</p>
                <div className="flex flex-wrap gap-2">
                  {SEGMENTI.map((seg) => (
                    <span
                      key={seg}
                      className="text-sm text-white/80 bg-white/[0.07] border border-white/15 rounded-full px-3.5 py-1.5"
                    >
                      {seg}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70 mt-7">
                  {GARANZIE.map((g) => (
                    <span key={g.text} className="flex items-center gap-2">
                      <g.icon className="w-4 h-4 text-gold shrink-0" /> {g.text}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Le 10 aree */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="max-w-3xl mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-4 leading-tight">
                    Le dieci aree di assistenza alle imprese edili
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Non sono ordinate per eleganza giuridica. Sono ordinate per urgenza: in cima quello che ti
                    blocca la cassa oggi, in fondo quello che si evita scrivendo bene il contratto prima di
                    aprire il cantiere.
                  </p>
                </div>
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
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-3">
                      Le guide per chi fa impresa in cantiere
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Scritte per chi deve decidere lunedì mattina: cosa scade, cosa serve avere per iscritto,
                      cosa succede se non fai niente.
                    </p>
                  </div>
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
                      className="group block bg-muted/40 hover:bg-white rounded-xl overflow-hidden border border-border hover:border-gold hover:shadow-card transition-all h-full"
                    >
                      <ArticleCover article={a} className="aspect-[16/9]" />
                      <div className="p-6">
                      <span className="text-[10px] uppercase tracking-wider font-bold text-gold-dark">{a.category}</span>
                      <h3 className="font-bold text-navy mt-2 mb-2 leading-snug group-hover:text-gold-dark">{a.title}</h3>
                      <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                      </div>
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
