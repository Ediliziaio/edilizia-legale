import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { faqEntries } from "@/data/faq";

interface ELFaqSiloProps {
  silo: "imprese" | "privati";
  titolo: string;
}

/**
 * Le domande frequenti del silo, con risposta visibile.
 *
 * Le 19 pagine domanda esistevano ma nessun hub le linkava: era il motore AEO
 * del sito lasciato scollegato dalle due pagine che ricevono più traffico.
 * Le risposte stanno nel testo, non dietro un accordion, perché è così che i
 * motori di risposta le estraggono.
 */
const ELFaqSilo = ({ silo, titolo }: ELFaqSiloProps) => {
  const domande = faqEntries.filter((f) => f.silo === silo);
  if (!domande.length) return null;

  return (
    <section className="py-16 lg:py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-9">
              <div className="max-w-2xl">
                <p className="flex items-center gap-2 text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">
                  <HelpCircle className="w-4 h-4" /> Risposte brevi
                </p>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight">
                  {titolo}
                </h2>
              </div>
              <Link
                to="/domande-frequenti"
                className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark shrink-0"
              >
                Tutte le domande <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4">
            {domande.slice(0, 6).map((f, i) => (
              <Reveal key={f.slug} delay={(i % 2) * 70}>
                <div className="h-full bg-white rounded-xl border border-border p-5 lg:p-6 flex flex-col">
                  <h3 className="font-bold text-navy leading-snug mb-2">{f.question}</h3>
                  <p className="text-sm text-foreground/70 leading-relaxed flex-1">{f.answer}</p>
                  <Link
                    to={`/domande-frequenti/${f.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold-dark mt-4"
                  >
                    Approfondisci <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELFaqSilo;
