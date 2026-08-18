import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import ELFinalCTA from "@/components/ELFinalCTA";
import ELBandaFoto from "@/components/ELBandaFoto";
import ELFaqSilo from "@/components/ELFaqSilo";
import ELVerticali from "@/components/ELVerticali";
import Reveal from "@/components/Reveal";
import { AreaCard } from "@/components/ELServicesCards";
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Phone, ShieldCheck, FileCheck, Scale, Quote } from "lucide-react";
import { areePrivati } from "@/data/aree";
import ArticleCover from "@/components/ArticleCover";
import { articlesMeta } from "@/data/articlesMeta";
import { SITE_URL, PHONE_TEL, PHONE_DISPLAY } from "@/data/site";

/** Chi arriva su questa pagina: la riga sotto l'hero serve a farsi riconoscere. */
const SEGMENTI = [
  "Chi ha una ristrutturazione in corso",
  "Chi ha comprato casa nuova",
  "Condòmini e amministratori",
  "Chi ha ricevuto un decreto ingiuntivo",
  "Chi subisce danni dal cantiere del vicino",
];

/** Segnali di competenza verificabili — niente promesse di risultato. */
const GARANZIE = [
  { icon: FileCheck, text: "Nessuna azione prima di aver letto le carte" },
  { icon: Scale, text: "Ti diciamo anche quando fare causa non conviene" },
  { icon: ShieldCheck, text: "Verifica dei conflitti di interesse su ogni incarico" },
];

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
        description="Assistenza legale ai privati: difetti costruttivi e garanzia decennale, cantiere abbandonato, preventivo sforato, fotovoltaico, bonus edilizi e decreto ingiuntivo."
        keywords="avvocato contro impresa edile, difetti costruttivi casa nuova, impresa sparita, preventivo sforato, avvocato difetti costruttivi, opposizione decreto ingiuntivo"
        canonical="https://www.edilizialegale.it/privati"
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
                    <Home className="w-4 h-4 text-gold" />
                    Avvocato contro l'impresa edile
                  </div>
                  <h1 className="font-bold tracking-tight mb-6">
                    <span className="block text-xl md:text-2xl font-semibold text-white/80 leading-snug mb-4">
                      Hai fatto lavori in casa — ristrutturazione, casa nuova, serramenti, fotovoltaico, cappotto
                      termico?
                    </span>
                    <span className="block text-3xl md:text-5xl leading-[1.12]">
                      Hai pagato gli acconti e i lavori non ci sono. La casa nuova ha crepe. Il preventivo è
                      raddoppiato. E l'impresa non risponde{"\u00A0"}più.
                    </span>
                    <span className="block text-gold text-2xl md:text-3xl mt-4 leading-snug">
                      Scopri se hai ragione — e quanto tempo ti resta per farla valere.
                    </span>
                  </h1>
                  <p className="text-lg text-white/85 mb-4 leading-relaxed">
                    Prima di cercare un avvocato vuoi capire se hai ragione. È normale, e non serve un
                    appuntamento per cominciare: ogni area qui sotto porta a una guida che spiega termini, strade
                    e costi con le parole di chi il problema ce l'ha in casa, non con quelle degli atti.
                  </p>
                  <p className="text-lg text-white/70 mb-8 leading-relaxed">
                    Una cosa però va detta subito. Mentre il costruttore “manda un tecnico” e ti rassicura a voce,
                    i termini corrono: 60 giorni per i vizi, un anno dalla scoperta per i difetti gravi, 40 giorni
                    per un decreto ingiuntivo.{" "}
                    <span className="text-white font-semibold">
                      Chi aspetta troppo non perde la ragione: perde il diritto.
                    </span>
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <Button
                      onClick={openContact}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-6 w-full sm:w-auto"
                    >
                      Raccontaci il tuo caso <ArrowRight className="ml-2 w-5 h-5" />
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
                    Contratto o preventivo, foto dei difetti, messaggi con l'impresa: mandaci quello che hai.
                    Entro 48 ore lavorative sai quali termini corrono, quali strade sono ancora aperte e se
                    conviene muoversi.
                  </p>
                </div>

                {/* Il caso tipo: mostra il metodo in tre secondi, senza promettere esiti */}
                <aside className="bg-white/[0.07] backdrop-blur rounded-2xl border border-white/15 p-6 lg:p-7">
                  <p className="text-[11px] uppercase tracking-wider font-bold text-gold mb-4">
                    Il caso che arriva più spesso
                  </p>
                  <div className="relative pl-7 mb-5">
                    <Quote className="w-5 h-5 text-gold/50 absolute left-0 top-0.5" />
                    <p className="text-white/85 leading-relaxed italic">
                      Casa consegnata a dicembre. A febbraio le prime crepe sopra le finestre. Il costruttore ha
                      mandato un tecnico, ha detto che è assestamento, e da allora non risponde più.
                    </p>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed mb-5">
                    <span className="font-semibold text-white">La prima cosa che guardiamo non sono le crepe. Sono le date.</span>{" "}
                    Per i difetti gravi hai un anno dalla scoperta per denunciare, e la denuncia deve essere
                    scritta: un tecnico che passa e ti rassicura non ferma nessun termine (art. 1669 c.c.).
                  </p>
                  <Link
                    to="/guide/difetti-costruttivi-casa-nuova"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-white transition-colors"
                  >
                    Difetti costruttivi in casa nuova <ArrowRight className="w-4 h-4" />
                  </Link>
                </aside>
              </div>

              {/* Chi assistiamo + segnali di competenza */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-[11px] uppercase tracking-wider font-bold text-white/50 mb-3">Assistiamo</p>
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
                    Le dieci aree di assistenza ai privati
                  </h2>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    Non sono ordinate per materia giuridica. Sono ordinate per come arrivano: in cima il problema
                    che hai in casa adesso, più sotto quello che si scopre quando è già successo.
                  </p>
                </div>
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

          <ELBandaFoto
            slot="privati-banda"
            occhiello="Come si lavora insieme"
            titolo="Prima di dirti se hai ragione, guardiamo le carte."
            testo="Le crepe, le infiltrazioni, il cantiere fermo: quello che vedi in casa è il punto di partenza, non la prova. La prova sta nel contratto, nel preventivo, nelle date delle contestazioni scritte e nelle fotografie datate. È da lì che si capisce cosa puoi ancora chiedere."
            punti={[
              "Quali termini corrono e quanto tempo resta per farli valere",
              "Chi risponde tra impresa, progettista, direttore dei lavori e costruttore",
              "Se conviene una causa, una mediazione, o nessuna delle due",
            ]}
            link={{ to: "/studio", label: "Il metodo di lavoro dello studio" }}
            invertita
          />

          <ELVerticali />

          <ELFaqSilo silo="privati" titolo="Le domande che ci fanno più spesso i committenti" />

          {/* Guide per i privati */}
          <section className="py-16 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <Reveal>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
                  <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-3">
                      Le guide più lette dai committenti
                    </h2>
                    <p className="text-foreground/70 leading-relaxed">
                      Scritte per capire prima di decidere: cosa scade, cosa mettere per iscritto, cosa succede se
                      lasci passare ancora qualche mese.
                    </p>
                  </div>
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
                      className="group block bg-white hover:bg-white rounded-xl overflow-hidden border border-border hover:border-gold hover:shadow-card transition-all h-full"
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

export default Privati;
