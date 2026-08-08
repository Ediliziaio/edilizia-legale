import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import handshakeImg from "@/assets/handshake-trust.jpg";
import ELHeroBackdrop from "./ELHeroBackdrop";
import { PHONE_TEL, PHONE_DISPLAY } from "@/data/site";

interface ELFinalCTAProps {
  onOpenContact: () => void;
}

const ELFinalCTA = ({ onOpenContact }: ELFinalCTAProps) => {
  return (
    <section className="relative py-16 lg:py-20 bg-navy text-white overflow-hidden">
      <ELHeroBackdrop />
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Iniziamo dai documenti</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Mandaci il fascicolo: ti diciamo in che termine sei.
            </h2>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Contratto, preventivo, SAL, foto, messaggi: raccogli quello che hai e raccontaci il caso. Entro 48 ore
              lavorative ricevi una prima valutazione riservata: quali strumenti sono praticabili, quali termini
              corrono e da dove ha senso iniziare.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button
                onClick={onOpenContact}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-navy font-semibold text-base h-12 px-7 w-full sm:w-auto"
              >
                Richiedi l'analisi del caso
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <a href={`tel:${PHONE_TEL}`} className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 bg-transparent text-white hover:bg-white hover:text-navy font-semibold text-base h-12 px-7 w-full"
                >
                  <Phone className="mr-2 w-4 h-4" />
                  {PHONE_DISPLAY}
                </Button>
              </a>
            </div>

            <p className="text-sm text-white/60">
              La valutazione descrive il percorso possibile, non promette risultati: l'esito dipende sempre dai
              documenti e dalle circostanze del caso concreto.
            </p>
          </div>

          <div className="hidden lg:block">
            <img
              src={handshakeImg}
              alt="Colloquio riservato con lo studio legale"
              loading="lazy"
              decoding="async"
              className="rounded-2xl w-full aspect-[4/3] object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELFinalCTA;
