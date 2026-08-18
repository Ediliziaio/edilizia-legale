import { useState, lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHero from "@/components/ELHero";
import ELTrustStrip from "@/components/ELTrustStrip";
import ELStats from "@/components/ELStats";
import ELProblemSolution from "@/components/ELProblemSolution";
// Lazy: recharts (~500 kB) resta fuori dal bundle iniziale della home.
const ELDeadlinesChart = lazy(() => import("@/components/ELDeadlinesChart"));
import ELServicesCards from "@/components/ELServicesCards";
import ELVerticali from "@/components/ELVerticali";
import ELProcessFlow from "@/components/ELProcessFlow";
import ELWhyUs from "@/components/ELWhyUs";
import ELGuidePilastro from "@/components/ELGuidePilastro";
import ELBandaFoto from "@/components/ELBandaFoto";
import ELAvvocato from "@/components/ELAvvocato";
import ELFAQ from "@/components/ELFAQ";
import ELFinalCTA from "@/components/ELFinalCTA";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const openContact = () => setIsContactOpen(true);
  const closeContact = () => setIsContactOpen(false);

  return (
    <>
      <SEO
        title="Edilizia Legale — Avvocati per Appalti e Contenzioso Edile"
        description="Studio legale specializzato in diritto dell'edilizia. Assistiamo imprese su appalti, crediti e fisco e privati nei contenziosi con le imprese di costruzione."
        keywords="avvocato edilizia, avvocato appalti, recupero crediti edilizia, difetti costruttivi, contenzioso edile, garanzia decennale, avvocato per imprese edili, avvocato contro impresa edile"
        canonical="https://www.edilizialegale.it/"
        ogTitle="Edilizia Legale — Conosciamo le carte dell'altra parte"
        ogDescription="Assistiamo le imprese edili su appalti, crediti e fisco di cantiere, e i privati nei contenziosi con le imprese di costruzione. Mai nella stessa vicenda."
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main id="contenuto" className="flex-1">
          <ELHero />
          <ELTrustStrip />
          <ELStats />
          <ELProblemSolution />
          <ELServicesCards />
          <Suspense fallback={<div className="min-h-[400px]" aria-hidden="true" />}>
            <ELDeadlinesChart />
          </Suspense>
          <ELVerticali />
          <ELProcessFlow />
          <ELBandaFoto
            slot="home-metodo"
            occhiello="Il fascicolo prima di tutto"
            titolo="Nessuna strategia prima di aver letto le carte."
            testo="Chi promette una linea difensiva al telefono, prima di vedere un documento, sta indovinando. Nel contenzioso edilizio la partita si decide su date, firme e clausole: quando è avvenuta la consegna, cosa è stato contestato per iscritto, quale termine è già scaduto."
            punti={[
              "Entro 48 ore lavorative sai quali termini corrono nel tuo caso",
              "Quali strade sono praticabili e quali sono già chiuse",
              "Se conviene muoversi, o se la cosa più onesta è dirti di no",
            ]}
            link={{ to: "/contatti", label: "Come mandare il fascicolo" }}
            invertita
          />
          <ELGuidePilastro />
          <ELAvvocato />
          <ELWhyUs />
          <ELFAQ />
          <ELFinalCTA onOpenContact={openContact} />
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={closeContact} />
        <ELStickyCTA onOpenContact={openContact} />
      </div>
    </>
  );
};

export default Index;
