import { useState } from "react";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELHero from "@/components/ELHero";
import ELTrustStrip from "@/components/ELTrustStrip";
import ELProblemSolution from "@/components/ELProblemSolution";
import ELServicesCards from "@/components/ELServicesCards";
import ELVerticali from "@/components/ELVerticali";
import ELProcessFlow from "@/components/ELProcessFlow";
import ELWhyUs from "@/components/ELWhyUs";
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
        ogTitle="Edilizia Legale — Il diritto dell'edilizia, dai due lati del cantiere"
        ogDescription="Assistiamo le imprese edili su appalti, crediti e fisco di cantiere, e i privati nei contenziosi con le imprese di costruzione. Mai nella stessa vicenda."
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={openContact} />

        <main className="flex-1">
          <ELHero />
          <ELTrustStrip />
          <ELProblemSolution />
          <ELServicesCards />
          <ELVerticali />
          <ELProcessFlow />
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
