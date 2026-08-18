import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ELImageSlot from "@/components/ELImageSlot";
import Reveal from "@/components/Reveal";
import { imageSlots, type ImageSlotId } from "@/data/imageSlots";

interface ELBandaFotoProps {
  slot: ImageSlotId;
  occhiello: string;
  titolo: string;
  testo: string;
  /** Elenco breve di punti concreti: due o tre, non di più. */
  punti?: string[];
  link?: { to: string; label: string };
  /** Immagine a destra invece che a sinistra. */
  invertita?: boolean;
}

/**
 * Banda a due colonne, foto e testo. Serve a spezzare le pagine hub, che oggi
 * sono sequenze ininterrotte di schede: l'occhio non ha un punto di riposo e
 * la pagina si legge come un elenco.
 *
 * La foto non è decorativa: mostra il mondo di cui parla la sezione. Finché lo
 * slot è vuoto il riquadro resta un pannello sobrio del brand, quindi la
 * sezione si può pubblicare prima che la foto esista.
 */
const ELBandaFoto = ({ slot, occhiello, titolo, testo, punti, link, invertita }: ELBandaFotoProps) => {
  const src = imageSlots[slot];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center max-w-6xl mx-auto">
            <div className={invertita ? "lg:order-2" : ""}>
              {src ? (
                <img
                  src={src}
                  alt=""
                  aria-hidden="true"
                  width={1600}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl object-cover aspect-[4/3] shadow-card"
                />
              ) : (
                <ELImageSlot id={slot} className="w-full rounded-2xl aspect-[4/3]" />
              )}
            </div>

            <div className={invertita ? "lg:order-1" : ""}>
              <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">{occhiello}</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-5">
                {titolo}
              </h2>
              <p className="text-lg text-foreground/75 leading-relaxed">{testo}</p>

              {punti && punti.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {punti.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-foreground/80">
                      <span className="text-gold-dark mt-2 text-xs shrink-0">●</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}

              {link && (
                <Link
                  to={link.to}
                  className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold-dark mt-7"
                >
                  {link.label} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ELBandaFoto;
