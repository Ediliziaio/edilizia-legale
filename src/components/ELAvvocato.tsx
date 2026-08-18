import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import ELImageSlot from "@/components/ELImageSlot";
import Reveal from "@/components/Reveal";
import { imageSlots } from "@/data/imageSlots";
import { DEFAULT_AUTHOR, AUTHOR_ROLE, AUTHOR_FORO, AUTHOR_ANNO } from "@/data/site";

/**
 * Chi ti risponde. Uno studio legale senza un volto e un nome in home chiede
 * fiducia senza offrirne: chi sta per affidare una causa da 200.000 euro vuole
 * prima vedere a chi la affida.
 */
const ELAvvocato = () => {
  const ritratto = imageSlots["avvocato-ritratto"];

  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-center max-w-5xl mx-auto">
            {ritratto ? (
              <img
                src={ritratto}
                alt={`${DEFAULT_AUTHOR}, ${AUTHOR_ROLE.toLowerCase()}`}
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="w-full max-w-[340px] mx-auto lg:mx-0 rounded-2xl object-cover aspect-[4/5] shadow-card"
              />
            ) : (
              <ELImageSlot
                id="avvocato-ritratto"
                className="w-full max-w-[340px] mx-auto lg:mx-0 rounded-2xl aspect-[4/5]"
              />
            )}

            <div>
              <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">
                Chi ti risponde
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-2">
                {DEFAULT_AUTHOR}
              </h2>
              <p className="text-foreground/60 font-medium mb-6">
                {AUTHOR_ROLE}
                {AUTHOR_FORO ? ` — ${AUTHOR_FORO}` : ""}
                {AUTHOR_ANNO ? `, iscritto dal ${AUTHOR_ANNO}` : ""}
              </p>

              <p className="text-lg text-foreground/75 leading-relaxed mb-4">
                Scrive i contratti d'appalto per le imprese e li smonta per i committenti. È il motivo per cui,
                leggendo un fascicolo, sa già quale riserva regge, quale perizia tiene in giudizio e quale
                clausola non verrà mai applicata: le ha viste funzionare da tutte e due le parti.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-6">
                Firma personalmente le {""}
                <Link to="/guide" className="text-navy font-semibold underline decoration-gold decoration-2 underline-offset-2 hover:text-gold-dark">
                  guide pubblicate su questo sito
                </Link>
                : sono lo stesso ragionamento che applica ai casi, scritto prima di conoscerti.
              </p>

              <p className="flex items-start gap-2.5 text-sm text-foreground/70 mb-7">
                <ShieldCheck className="w-4 h-4 text-gold-dark mt-0.5 shrink-0" />
                Ogni incarico passa dalla verifica dei conflitti di interesse: impresa e committente della stessa
                vicenda non vengono mai assistiti entrambi.
              </p>

              <Link
                to="/studio"
                className="inline-flex items-center gap-2 text-navy font-bold hover:text-gold-dark"
              >
                Lo studio e il metodo di lavoro <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default ELAvvocato;
