import { ImageIcon } from "lucide-react";
import { imageSlots, imageSlotLabels, type ImageSlotId } from "@/data/imageSlots";

interface ELImageSlotProps {
  id: ImageSlotId;
  /** Classi per il contenitore (aspect ratio, arrotondamenti…). */
  className?: string;
  /** Tema del segnaposto quando manca la foto. */
  tone?: "light" | "dark";
}

/**
 * Slot immagine sostituibile: se in imageSlots c'è un percorso renderizza la
 * foto (con hover zoom), altrimenti un segnaposto curato con l'etichetta di
 * cosa andrà lì. Sostituire le foto = toccare SOLO src/data/imageSlots.ts.
 */
const ELImageSlot = ({ id, className = "", tone = "light" }: ELImageSlotProps) => {
  const src = imageSlots[id];
  const label = imageSlotLabels[id];

  if (src) {
    return (
      <div className={`group overflow-hidden ${className}`}>
        <img
          src={src}
          alt={label}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  const dark = tone === "dark";

  // In produzione un pannello sobrio della palette: la dicitura "Foto in arrivo"
  // e il brief servono a chi lavora al sito, non a chi lo visita, e su una pagina
  // pubblica fanno sembrare il sito incompiuto. In sviluppo restano visibili,
  // cosi' le foto ancora da produrre si vedono a colpo d'occhio.
  const inSviluppo = import.meta.env.DEV;

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${
        dark ? "bg-white/5 border border-white/15" : "bg-muted border border-border"
      } ${className}`}
      {...(inSviluppo ? { role: "img", "aria-label": `${label} (immagine in arrivo)` } : { "aria-hidden": true })}
    >
      {/* trama diagonale leggera */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, currentColor 0, currentColor 1px, transparent 0, transparent 14px)",
        }}
      />
      {inSviluppo ? (
        <div className="relative text-center px-6 py-10">
          <div className={`w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center ${dark ? "bg-gold/15" : "bg-navy/5"}`}>
            <ImageIcon className={`w-6 h-6 ${dark ? "text-gold" : "text-navy/50"}`} />
          </div>
          <p className={`text-sm font-semibold ${dark ? "text-white/70" : "text-navy/60"}`}>{label}</p>
          <p className={`text-xs mt-1 ${dark ? "text-white/40" : "text-foreground/40"}`}>Foto in arrivo</p>
        </div>
      ) : (
        <ELMarchioFiligrana dark={dark} />
      )}
    </div>
  );
};

/** Marchio a scudo in filigrana: riempie il riquadro senza dichiarare un'assenza. */
const ELMarchioFiligrana = ({ dark }: { dark: boolean }) => (
  <img
    src={dark ? "/brand/marchio-edilizia-legale-chiaro.png" : "/brand/marchio-edilizia-legale.png"}
    alt=""
    aria-hidden="true"
    width={392}
    height={512}
    loading="lazy"
    decoding="async"
    className={`relative h-1/3 max-h-24 w-auto ${dark ? "opacity-20" : "opacity-[0.13]"}`}
  />
);

export default ELImageSlot;
