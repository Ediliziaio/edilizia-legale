import { useState } from "react";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import { SITE_URL } from "@/data/site";

const ConflittiInteresse = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Lo studio", "item": `${SITE_URL}/studio` },
      { "@type": "ListItem", "position": 3, "name": "Conflitti di interesse", "item": `${SITE_URL}/studio/conflitti-di-interesse` },
    ],
  };

  return (
    <>
      <SEO
        title="Conflitti di Interesse: la Nostra Policy | Edilizia Legale"
        description="Assistiamo imprese edili e committenti privati, mai nella stessa vicenda. Come verifichiamo ogni incarico e quando lo rifiutiamo: la policy pubblica dello studio."
        canonical="https://www.edilizialegale.it/studio/conflitti-di-interesse"
        jsonLd={[breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={() => setIsContactOpen(true)} />

        <main id="contenuto" className="flex-1 py-14 lg:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto legal-content">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
                Conflitti di interesse: come li gestiamo
              </h1>
              <p className="text-xl text-foreground/75 leading-relaxed mb-8">
                Lo studio assiste sia imprese del settore edile sia committenti privati. Non è una contraddizione,
                a una condizione: che le due attività non si incontrino mai nella stessa vicenda. Questa pagina
                spiega, in modo verificabile, come lo garantiamo.
              </p>

              <h2>Il principio</h2>
              <p>
                Ai sensi dell'art. 24 del Codice Deontologico Forense, l'avvocato deve astenersi dal prestare
                attività professionale quando questa determini un conflitto con gli interessi di un altro assistito.
                Per uno studio che lavora sui due lati del cantiere, il rispetto di questa regola non può essere
                affidato al caso: richiede una procedura.
              </p>

              <h2>La verifica su ogni nuovo incarico</h2>
              <p>
                Prima di accettare qualsiasi incarico verifichiamo, sull'archivio dello studio, che la controparte
                non sia un soggetto già assistito, né una società collegata a un soggetto assistito. La verifica
                riguarda anche gli incarichi chiusi: non assumiamo mandati contro chi è stato nostro cliente nella
                stessa vicenda o in vicende connesse.
              </p>

              <h2>Cosa succede se il conflitto emerge</h2>
              <p>
                Se il conflitto emerge prima dell'incarico, l'incarico viene rifiutato e — dove possibile — indichiamo
                al richiedente come individuare un altro professionista qualificato. Se emerge dopo, rinunciamo al
                mandato nei modi previsti dalla deontologia, tutelando la riservatezza di tutte le parti coinvolte.
              </p>

              <h2>Cosa non facciamo mai</h2>
              <ul>
                <li>Assistere due parti della stessa vicenda, in qualunque combinazione.</li>
                <li>Utilizzare informazioni riservate acquisite da un assistito a vantaggio di un altro.</li>
                <li>Assumere incarichi contro un cliente attuale dello studio, anche su vicende diverse.</li>
              </ul>

              <h2>Perché pubblichiamo questa pagina</h2>
              <p>
                Chi si rivolge a uno studio che lavora con imprese e committenti ha il diritto di sapere in anticipo
                come vengono gestite le situazioni delicate. Preferiamo scriverlo prima, pubblicamente, piuttosto che
                spiegarlo dopo, caso per caso.
              </p>

              <p className="text-sm text-foreground/60 mt-10">
                Ultimo aggiornamento: agosto 2026. Per qualsiasi domanda su questa policy puoi scriverci dalla pagina
                contatti.
              </p>
            </div>
          </div>
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      </div>
    </>
  );
};

export default ConflittiInteresse;
