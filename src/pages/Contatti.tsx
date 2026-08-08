import { useState } from "react";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import Reveal from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Shield, Clock, FileText, ArrowRight } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, PEC, SITE_URL } from "@/data/site";

const Contatti = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Contatti", "item": `${SITE_URL}/contatti` },
    ],
  };

  const docs = [
    "Contratto o preventivo firmato (se esiste)",
    "SAL, fatture e ricevute dei pagamenti",
    "Foto e video del cantiere o dei difetti",
    "Messaggi, email e PEC scambiati con l'altra parte",
    "Eventuali perizie, verbali o atti già ricevuti",
  ];

  return (
    <>
      <SEO
        title="Contatti | Edilizia Legale — Analisi del Caso in 48 Ore"
        description="Raccontaci il tuo caso: entro 48 ore lavorative ricevi una prima valutazione riservata. Telefono, email e PEC dello studio. Operiamo in tutta Italia."
        canonical="https://www.edilizialegale.it/contatti"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={() => setIsContactOpen(true)} />

        <main className="flex-1">
          <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
            <ELHeroBackdrop />
            <div className="container mx-auto px-4 py-14 lg:py-16 relative">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 leading-[1.1]">
                  Parliamo del tuo caso. <span className="text-gold">Con i documenti davanti.</span>
                </h1>
                <p className="text-lg text-white/80 leading-relaxed">
                  Entro 48 ore lavorative dalla richiesta ricevi una prima valutazione riservata: in che termine sei,
                  quali strumenti sono praticabili, da dove ha senso iniziare. Senza impegno.
                </p>
              </div>
            </div>
          </section>

          <section className="py-14 lg:py-20 bg-muted/40">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-[1fr_380px] gap-8 max-w-5xl mx-auto items-start">
                <Reveal>
                  <div className="bg-white rounded-2xl border border-border p-7 lg:p-9">
                    <h2 className="text-2xl font-bold text-navy mb-3">Scrivici</h2>
                    <p className="text-foreground/70 leading-relaxed mb-6">
                      Il modo più rapido è il modulo: ci arriva già organizzato per silo (impresa o privato) e tipo di
                      problema, e ci permette di risponderti con una valutazione utile, non con un "ci sentiamo".
                    </p>
                    <Button
                      onClick={() => setIsContactOpen(true)}
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-navy font-semibold h-12 px-6 mb-8"
                    >
                      Apri il modulo di contatto <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>

                    <div className="space-y-4 border-t border-border pt-6">
                      <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-3 text-foreground/80 hover:text-navy">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Phone className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{PHONE_DISPLAY}</strong><br /><span className="text-sm text-foreground/60">lun-ven, 9:00-18:30</span></span>
                      </a>
                      <a href={`mailto:${EMAIL}`} className="flex items-center gap-3 text-foreground/80 hover:text-navy">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Mail className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{EMAIL}</strong><br /><span className="text-sm text-foreground/60">per richieste e documenti</span></span>
                      </a>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Shield className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">{PEC}</strong><br /><span className="text-sm text-foreground/60">PEC per comunicazioni formali</span></span>
                      </div>
                      <div className="flex items-center gap-3 text-foreground/80">
                        <span className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
                          <Clock className="w-4 h-4 text-navy" />
                        </span>
                        <span><strong className="text-navy">In tutta Italia</strong><br /><span className="text-sm text-foreground/60">colloqui in studio o da remoto</span></span>
                      </div>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={120}>
                  <div className="bg-navy text-white rounded-2xl p-7">
                    <div className="flex items-center gap-2 mb-4">
                      <FileText className="w-5 h-5 text-gold" />
                      <h2 className="text-lg font-bold">Cosa preparare</h2>
                    </div>
                    <p className="text-white/75 text-sm leading-relaxed mb-5">
                      La valutazione è tanto più utile quanto più completo è il fascicolo. Se li hai, tieni pronti:
                    </p>
                    <ul className="space-y-2.5">
                      {docs.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-sm text-white/85">
                          <span className="text-gold mt-1 text-xs">●</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <p className="text-white/60 text-xs leading-relaxed mt-5">
                      Non hai tutto? Va bene lo stesso: parti da quello che c'è. Ti diremo noi cosa manca e come
                      recuperarlo.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default Contatti;
