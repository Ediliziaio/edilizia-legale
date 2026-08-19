import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ELImageSlot from "@/components/ELImageSlot";
import { imageSlots } from "@/data/imageSlots";
import { DEFAULT_AUTHOR, AUTHOR_ROLE, AUTHOR_FORO, AUTHOR_ANNO } from "@/data/site";

/**
 * Firma dell'articolo: chi l'ha scritto, con che titolo e dove verificarlo.
 * Su materia YMYL come il diritto è il segnale E-E-A-T che pesa di più, e
 * finora al sito mancava del tutto.
 */
const ELAuthorBox = () => {
  const ritratto = imageSlots["avvocato-ritratto"];

  return (
    <aside className="mt-12 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start bg-muted/40 border border-border rounded-2xl p-6">
      {ritratto ? (
        <img
          src={ritratto}
          alt={DEFAULT_AUTHOR}
          width={200}
          height={200}
          loading="lazy"
          decoding="async"
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover object-[50%_18%] shrink-0"
        />
      ) : (
        <ELImageSlot id="avvocato-ritratto" className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl shrink-0" />
      )}

      <div className="min-w-0">
        <p className="text-[11px] uppercase tracking-wider font-bold text-gold-dark mb-1.5">Scritto da</p>
        <p className="font-bold text-navy text-lg leading-tight">{DEFAULT_AUTHOR}</p>
        <p className="text-sm text-foreground/60 mt-0.5">
          {AUTHOR_ROLE}
          {AUTHOR_FORO ? ` — ${AUTHOR_FORO}` : ""}
          {AUTHOR_ANNO ? `, iscritto dal ${AUTHOR_ANNO}` : ""}
        </p>
        <p className="text-sm text-foreground/70 leading-relaxed mt-3">
          Si occupa solo di diritto dell'edilizia e degli appalti: contratti e contenzioso per le imprese,
          difetti costruttivi e lavori mai finiti per i committenti. Mai le due parti nella stessa vicenda.
        </p>
        <Link
          to="/studio"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark mt-3"
        >
          Lo studio e il metodo di lavoro <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
};

export default ELAuthorBox;
