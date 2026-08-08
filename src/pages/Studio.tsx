import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import ELProcessFlow from "@/components/ELProcessFlow";
import ELFinalCTA from "@/components/ELFinalCTA";
import Reveal from "@/components/Reveal";
import { Scale, ShieldCheck, BookOpen, ArrowRight, Landmark } from "lucide-react";
import { SITE_URL } from "@/data/site";

const Studio = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Lo studio", "item": `${SITE_URL}/studio` },
    ],
  };

  return (
    <>
      <SEO
        title="Lo Studio | Edilizia Legale — Diritto dell'Edilizia e degli Appalti"
        description="Edilizia Legale è uno studio verticale sul diritto dell'edilizia: appalti, vizi, riserve, fisco di cantiere. Metodo, valori e policy sui conflitti di interesse."
        canonical="https://www.edilizialegale.it/studio"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <ELHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-20 relative">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
                  <Scale className="w-4 h-4 text-gold" />
                  Lo studio
                </div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1]">
                  Uno studio costruito <span className="text-gold">attorno a una sola materia.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Il diritto dell'edilizia non è una specializzazione di facciata: è un intreccio di codice civile,
                  contratti pubblici, fisco, lavoro e tecnica delle costruzioni. Presidiarlo davvero richiede di non
                  fare altro. È la scelta che abbiamo fatto.
                </p>
              </div>
            </div>
          </section>

          {/* Chi siamo / cosa facciamo */}
          <section className="py-16 lg:py-20 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
                <Reveal>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <BookOpen className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Due lati, un metodo</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Assistiamo le imprese edili nei contratti e nei contenziosi, e i committenti privati contro le
                      imprese scorrette. Mai nella stessa vicenda: ogni incarico passa da una verifica dei conflitti
                      di interesse, con una policy pubblica.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={100}>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <Landmark className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Anche il fisco del cantiere</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Superbonus, reverse charge, responsabilità solidale, DURC di congruità: il contenzioso
                      tributario dell'edilizia richiede insieme competenza fiscale e conoscenza del cantiere.
                      È uno dei nostri presidi principali.
                    </p>
                  </div>
                </Reveal>
                <Reveal delay={200}>
                  <div className="bg-muted/40 rounded-2xl p-7 border border-border h-full">
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5 text-gold" />
                    </div>
                    <h2 className="text-lg font-bold text-navy mb-2">Informazione conforme</h2>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Niente promesse di risultato, niente percentuali di vittoria, niente superlativi: l'art. 35 del
                      Codice Deontologico Forense non lo consente, e non ne abbiamo bisogno. Descriviamo il metodo,
                      i termini e le strade percorribili.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={250}>
                <div className="max-w-5xl mx-auto mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div>
                    <h3 className="font-bold text-navy mb-1">I professionisti dello studio</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      Le schede dei professionisti — con foro di appartenenza, anno di iscrizione all'albo e materie —
                      sono in preparazione e verranno pubblicate in questa pagina. [DA CONFERMARE]
                    </p>
                  </div>
                  <Link to="/studio/conflitti-di-interesse" className="shrink-0">
                    <span className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark">
                      Policy sui conflitti di interesse <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          <ELProcessFlow />
          <ELFinalCTA onOpenContact={openContact} />
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Studio;
