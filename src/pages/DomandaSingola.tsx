import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import ELHeader from "@/components/ELHeader";
import ELFooter from "@/components/ELFooter";
import ELContactModal from "@/components/ELContactModal";
import ELStickyCTA from "@/components/ELStickyCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, BookOpen, Scale } from "lucide-react";
import { getFaq, faqEntries } from "@/data/faq";
import { estraiFonti } from "@/components/ArticleSources";
import { getArticleMeta, aggiornamentoConPreposizione, ultimoAggiornamentoContenuti, toISODate } from "@/data/articles";
import { SITE_URL, DEFAULT_AUTHOR, AUTHOR_ID, AUTHOR_URL } from "@/data/site";

/**
 * Pagina dedicata a UNA sola domanda (/domande-frequenti/[slug]):
 * H1 = domanda esatta, risposta diretta 40-60 parole, approfondimento con
 * riferimento normativo, link contestuale alla guida. Schema QAPage.
 */
const DomandaSingola = () => {
  const { slug } = useParams();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const faq = slug ? getFaq(slug) : undefined;

  if (!faq) return <Navigate to="/domande-frequenti" replace />;

  const url = `${SITE_URL}/domande-frequenti/${faq.slug}`;
  const guida = faq.guida ? getArticleMeta(faq.guida) : undefined;
  /**
   * Domande correlate per parole in comune, non per ordine di file.
   * Prima si prendevano sempre le prime tre dello stesso silo: le stesse tre
   * pagine raccoglievano tutti i link e le altre restavano con il solo link
   * dell'hub — un link interno e' poco per finire in coda alla scansione.
   */
  const parole = (t: string) =>
    new Set(
      t.toLowerCase().split(/[^a-zà-ù0-9]+/).filter((w) => w.length > 4),
    );
  const mie = parole(`${faq.question} ${faq.answer}`);
  const related = [...faqEntries]
    .filter((f) => f.slug !== faq.slug)
    .map((f) => {
      const sue = parole(`${f.question} ${f.answer}`);
      let n = 0;
      for (const w of sue) if (mie.has(w)) n++;
      return { f, punti: n * 2 + (f.silo === faq.silo ? 1 : 0) };
    })
    .sort((a, b) => b.punti - a.punti || a.f.slug.localeCompare(b.f.slug))
    .slice(0, 4)
    .map((x) => x.f);

  // Norme citate nella risposta: stesso blocco delle guide, costruito sui
  // testi della domanda. E' contenuto verificabile, non riempitivo.
  const fonti = estraiFonti([
    { type: "p", text: faq.answer },
    ...faq.detail.map((t) => ({ type: "p" as const, text: t })),
  ]);

  // Data di pubblicazione: la stessa "aggiornato a..." mostrata in pagina —
  // le risposte vengono riviste insieme al corpus delle guide.
  const dataISO = toISODate(ultimoAggiornamentoContenuti());

  // Search Console segnala come "da migliorare" i campi author, datePublished
  // e upvoteCount: li dichiariamo con valori veri. La domanda e' redatta dallo
  // studio, la risposta e' dell'avvocato; upvoteCount e' 0 perche' il sito non
  // ha un sistema di voti — meglio uno zero onesto che un numero inventato.
  const qaSchema = {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "mainEntity": {
      "@type": "Question",
      "name": faq.question,
      "text": faq.question,
      "answerCount": 1,
      ...(dataISO ? { "datePublished": dataISO } : {}),
      "author": { "@type": "Organization", "@id": `${SITE_URL}/#studio`, "name": "Edilizia Legale" },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
        "url": url,
        "upvoteCount": 0,
        ...(dataISO ? { "datePublished": dataISO } : {}),
        "author": { "@type": "Person", "@id": AUTHOR_ID, "name": DEFAULT_AUTHOR, "url": AUTHOR_URL },
      },
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
      { "@type": "ListItem", "position": 2, "name": "Domande frequenti", "item": `${SITE_URL}/domande-frequenti` },
      { "@type": "ListItem", "position": 3, "name": faq.question, "item": url },
    ],
  };

  // Il suffisso del brand entra solo se il title resta sotto i ~60 caratteri che
  // Google mostra: oltre, verrebbe troncato proprio dove sta la keyword.
  const seoTitle =
    faq.seoTitle ??
    (faq.question.length <= 42 ? `${faq.question} | Edilizia Legale` : faq.question);

  return (
    <>
      <SEO
        title={seoTitle}
        description={faq.answer.length <= 155 ? faq.answer : `${faq.answer.slice(0, 152)}…`}
        canonical={url}
        ogType="article"
        jsonLd={[qaSchema, breadcrumbSchema]}
      />

      <div className="min-h-screen bg-background flex flex-col">
        <ELHeader onOpenContact={() => setIsContactOpen(true)} />

        <main id="contenuto" className="flex-1">
          <section className="py-12 lg:py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                {/* Briciole visibili, allineate al BreadcrumbList dichiarato. */}
                <nav aria-label="Percorso" className="mb-6">
                  <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-foreground/60">
                    <li><Link to="/" className="hover:text-navy font-semibold">Home</Link></li>
                    <li aria-hidden="true" className="text-foreground/30">/</li>
                    <li><Link to="/domande-frequenti" className="hover:text-navy font-semibold">Domande frequenti</Link></li>
                    <li aria-hidden="true" className="text-foreground/30">/</li>
                    <li aria-current="page" className="text-foreground/80 max-w-full truncate">{faq.question}</li>
                  </ol>
                </nav>

                <span className="block text-xs uppercase tracking-wider font-bold text-gold-dark mb-3">
                  {faq.silo === "imprese" ? "Per le imprese" : "Per i privati"}
                </span>

                <h1 className="text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">{faq.question}</h1>

                {/* Risposta diretta */}
                <div className="bg-gold/10 border-l-4 border-gold rounded-r-xl p-6 mb-8">
                  <p className="text-lg text-navy leading-relaxed font-medium">{faq.answer}</p>
                </div>

                {/* Approfondimento */}
                <div className="space-y-5">
                  {faq.detail.map((p, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed text-lg">{p}</p>
                  ))}
                </div>

                {/* Link alla guida */}
                {guida && (
                  <Link
                    to={`/guide/${guida.slug}`}
                    className="mt-9 group flex items-start gap-4 bg-muted/40 hover:bg-white border border-border hover:border-gold rounded-2xl p-6 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-bold text-gold-dark">La guida completa</span>
                      <h2 className="font-bold text-navy leading-snug mt-1 group-hover:text-gold-dark">{guida.title}</h2>
                      <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                        Leggi la guida <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                )}

                {fonti.length > 0 && (
                  <section className="mt-9 border border-border rounded-2xl overflow-hidden">
                    <h2 className="flex items-center gap-2.5 bg-muted/60 px-5 py-3.5 text-sm font-bold text-navy border-b border-border">
                      <Scale className="w-4 h-4 text-gold-dark shrink-0" />
                      Riferimenti normativi
                    </h2>
                    <ul className="px-5 py-4 flex flex-wrap gap-2">
                      {fonti.map((f) => (
                        <li
                          key={f}
                          className="text-sm font-medium text-navy bg-muted/50 border border-border rounded-lg px-2.5 py-1"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}

                {/* CTA */}
                <div className="mt-10 bg-navy text-white rounded-2xl p-7">
                  <h2 className="text-xl font-bold mb-2">Il tuo caso è diverso? Probabilmente sì.</h2>
                  <p className="text-white/80 mb-5 leading-relaxed">
                    Le risposte generali servono a orientarsi, ma i termini si calcolano sui documenti. Raccontaci il
                    caso: entro 48 ore lavorative ti diciamo in che termine sei e quali strade esistono.
                  </p>
                  <Button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-gold hover:bg-gold-dark text-navy font-semibold"
                  >
                    Richiedi l'analisi del caso <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>

                {/* Correlate */}
                {related.length > 0 && (
                  <div className="mt-12">
                    <h2 className="text-xl font-bold text-navy mb-4">Altre domande frequenti</h2>
                    <ul className="space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            to={`/domande-frequenti/${r.slug}`}
                            className="group flex items-center justify-between gap-3 bg-muted/40 hover:bg-white border border-border hover:border-gold rounded-xl px-5 py-4 transition-all"
                          >
                            <span className="font-semibold text-navy group-hover:text-gold-dark leading-snug">{r.question}</span>
                            <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-gold-dark shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="text-xs text-foreground/50 mt-10 leading-relaxed">
                  Questo contenuto ha finalità informative e non sostituisce una consulenza legale sul caso concreto.
                  Aggiornato {aggiornamentoConPreposizione()} sulla base della normativa e della giurisprudenza vigenti.
                </p>
              </div>
            </div>
          </section>
        </main>

        <ELFooter />
        <ELContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <ELStickyCTA onOpenContact={() => setIsContactOpen(true)} />
      </div>
    </>
  );
};

export default DomandaSingola;
