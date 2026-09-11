import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/data/site";
import { urlFormConCampagna } from "@/lib/eicForm";

const ORIGINE = "https://app.ediliziaincloud.com";
const COMPANY_ID = "3c6e1cf3-1b86-4ddd-add0-4e377bd5cab3";

interface ELFormLeadProps {
  /** Slug del modulo su EdiliziaInCloud. */
  slug: SlugModulo;
  occhiello: string;
  titolo: string;
  testo: string;
  /** Titolo accessibile dell'iframe: lo legge chi naviga con screen reader. */
  titoloModulo: string;
}

export type SlugModulo = "edilizia-legale-imprese" | "edilizia-legale-privati";

/**
 * Solo il riquadro del modulo. L'URL si compone nel browser, perché legge i
 * parametri di campagna dalla pagina e durante il prerender `window` non
 * esiste; l'ascoltatore dei messaggi viene rimosso allo smontaggio, altrimenti
 * navigando tra le pagine se ne accumulerebbe uno per visita.
 */
export const ELFormEmbed = ({
  slug,
  titoloModulo,
  className = "",
}: {
  slug: SlugModulo;
  titoloModulo: string;
  className?: string;
}) => {
  const [src, setSrc] = useState<string | null>(null);
  const [altezza, setAltezza] = useState(620);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const url = new URL(`${ORIGINE}/f`);
    url.searchParams.set("slug", slug);
    url.searchParams.set("company_id", COMPANY_ID);
    // Parametri di campagna: quelli della pagina o, se la visita è iniziata
    // altrove (es. annuncio → home → questa pagina), quelli salvati all'atterraggio.
    setSrc(urlFormConCampagna(url.toString()));
  }, [slug]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      // Tre controlli: da chi arriva, da dove, e per quale modulo. Senza,
      // qualunque pagina incorporata potrebbe ridimensionare il riquadro.
      if (event.origin !== ORIGINE) return;
      if (event.source !== iframeRef.current?.contentWindow) return;
      const dati = event.data as { type?: string; slug?: string; height?: number } | null;
      if (!dati || dati.type !== "eic-lead-form-height" || dati.slug !== slug) return;
      const h = Math.max(620, Math.min(2600, Number(dati.height ?? 0) + 16));
      if (h) setAltezza(h);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [slug]);

  if (!src) return null;

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title={titoloModulo}
      loading="lazy"
      referrerPolicy="strict-origin-when-cross-origin"
      style={{ height: `${altezza}px` }}
      className={`w-full max-w-[640px] mx-auto block border-0 rounded-xl overflow-hidden bg-white ${className}`}
    />
  );
};

/** Sezione di pagina: cornice editoriale attorno al modulo, con ripiego senza JS. */
const ELFormLead = ({ slug, occhiello, titolo, testo, titoloModulo }: ELFormLeadProps) => {
  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-9">
          <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">{occhiello}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-4">
            {titolo}
          </h2>
          <p className="text-lg text-foreground/75 leading-relaxed">{testo}</p>
        </div>

        <ELFormEmbed slug={slug} titoloModulo={titoloModulo} />

        <noscript>
          <p className="max-w-[640px] mx-auto text-center text-foreground/75 bg-white border border-border rounded-xl p-6">
            Il modulo richiede JavaScript. Puoi scriverci a{" "}
            <a href={`mailto:${EMAIL}`} className="text-navy font-semibold underline">{EMAIL}</a> o
            chiamare il{" "}
            <a href={`tel:${PHONE_TEL}`} className="text-navy font-semibold underline">{PHONE_DISPLAY}</a>.
          </p>
        </noscript>

        <p className="text-center text-sm text-foreground/60 mt-6">
          Preferisci il telefono?{" "}
          <a href={`tel:${PHONE_TEL}`} className="text-navy font-semibold hover:text-gold-dark">
            {PHONE_DISPLAY}
          </a>{" "}
          · I dati sono trattati secondo la{" "}
          <Link to="/privacy" className="text-navy font-semibold hover:text-gold-dark underline">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default ELFormLead;
