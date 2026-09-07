import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Building2, HomeIcon, ArrowLeft, ArrowRight, ShieldCheck, Phone } from "lucide-react";
import { ELFormEmbed, type SlugModulo } from "@/components/ELFormLead";
import { PHONE_DISPLAY, PHONE_TEL } from "@/data/site";

interface ELContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PORTE: {
  slug: SlugModulo;
  icona: typeof Building2;
  titolo: string;
  sottotitolo: string;
  esempio: string;
  titoloModulo: string;
}[] = [
  {
    slug: "edilizia-legale-imprese",
    icona: Building2,
    titolo: "Sono un'impresa",
    sottotitolo: "Imprese edili, subappaltatori, artigiani",
    esempio: "Saldo non pagato, lavori contestati, DURC, gare, fisco di cantiere",
    titoloModulo: "Consulenza legale per la tua impresa",
  },
  {
    slug: "edilizia-legale-privati",
    icona: HomeIcon,
    titolo: "Sono un privato",
    sottotitolo: "Committenti, acquirenti, condòmini",
    esempio: "Difetti, cantiere fermo, preventivo sforato, decreto ingiuntivo",
    titoloModulo: "Hai un problema con l'impresa che ha fatto i lavori?",
  },
];

/**
 * Bivio e poi modulo. Le due parti hanno moduli distinti su EdiliziaInCloud,
 * quindi chiedere prima chi sei evita di raccogliere richieste nel posto
 * sbagliato — ed è la stessa domanda che la home fa già in apertura.
 */
const ELContactModal = ({ isOpen, onClose }: ELContactModalProps) => {
  const [scelta, setScelta] = useState<SlugModulo | null>(null);

  // Alla chiusura si torna al bivio: riaprendo, la scelta precedente non deve
  // restare impressa — chi torna può avere un caso dell'altro tipo.
  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => setScelta(null), 200);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  const porta = PORTE.find((p) => p.slug === scelta);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <DialogTitle className="text-xl text-navy text-left">
              {porta ? porta.titolo : "Raccontaci il tuo caso"}
            </DialogTitle>
          </div>
          <p className="text-sm text-foreground/70 text-left">
            {porta
              ? "Compila il modulo: entro 48 ore lavorative ti diciamo in che termine sei e quali strade esistono."
              : "Le due parti del cantiere hanno problemi diversi. Dicci da che lato stai e ti diamo il modulo giusto."}
          </p>
        </DialogHeader>

        {porta ? (
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setScelta(null)}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground/60 hover:text-navy mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Cambia
            </button>
            <ELFormEmbed slug={porta.slug} titoloModulo={porta.titoloModulo} />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-3 pt-2">
            {PORTE.map((p) => (
              <button
                key={p.slug}
                type="button"
                onClick={() => setScelta(p.slug)}
                className="group text-left bg-muted/40 hover:bg-white border border-border hover:border-gold rounded-2xl p-5 transition-all hover:shadow-card"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center">
                    <p.icona className="w-5 h-5 text-navy" />
                  </span>
                  <ArrowRight className="w-5 h-5 text-foreground/25 group-hover:text-gold-dark group-hover:translate-x-1 transition-all" />
                </div>
                <span className="block font-bold text-navy text-lg leading-tight">{p.titolo}</span>
                <span className="block text-xs uppercase tracking-wider font-semibold text-gold-dark mt-1">
                  {p.sottotitolo}
                </span>
                <span className="block text-sm text-foreground/65 leading-relaxed mt-3">{p.esempio}</span>
              </button>
            ))}
          </div>
        )}

        <p className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-foreground/55 pt-2">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-gold-dark" /> Riservato, senza impegno
          </span>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-1.5 font-semibold text-navy hover:text-gold-dark">
            <Phone className="w-3.5 h-3.5" /> {PHONE_DISPLAY}
          </a>
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default ELContactModal;
