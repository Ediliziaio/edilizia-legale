import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ArticleCover from "@/components/ArticleCover";
import Reveal from "@/components/Reveal";
import { articlesMeta, PILLAR_SLUGS } from "@/data/articles";

/**
 * Le quattro guide pilastro in home.
 *
 * Prima non esisteva un solo link dalla home alle 43 guide: nessuna autorità
 * arrivava ai pilastri, e chi sta ancora capendo se ha ragione — cioè quasi
 * tutti — non trovava niente da leggere prima di decidere se chiamare.
 */
const ELGuidePilastro = () => {
  const pilastri = PILLAR_SLUGS.map((slug) => articlesMeta.find((a) => a.slug === slug)).filter(
    (a): a is NonNullable<typeof a> => Boolean(a),
  );

  if (!pilastri.length) return null;

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div className="max-w-2xl">
              <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">
                Prima di chiamare, leggi
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy leading-tight mb-4">
                Le quattro guide da cui parte quasi ogni caso.
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Termini, strade praticabili e costi, scritti per chi deve decidere questa settimana. Se dopo
                averle lette il tuo caso resta diverso — e di solito lo è — allora vale la pena sentirsi.
              </p>
            </div>
            <Link
              to="/guide"
              className="inline-flex items-center gap-2 text-navy font-semibold hover:text-gold-dark shrink-0"
            >
              Tutte le {articlesMeta.length} guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pilastri.map((a, i) => (
            <Reveal key={a.slug} delay={(i % 4) * 70}>
              <Link
                to={`/guide/${a.slug}`}
                className="group flex flex-col h-full bg-muted/40 hover:bg-white rounded-xl overflow-hidden border border-border hover:border-gold hover:shadow-card transition-all"
              >
                <ArticleCover article={a} className="aspect-[16/9]" />
                <div className="p-5 flex flex-col flex-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-gold-dark">
                    {a.category}
                  </span>
                  <h3 className="font-bold text-navy mt-2 mb-2 leading-snug group-hover:text-gold-dark">
                    {a.title}
                  </h3>
                  <p className="text-sm text-foreground/65 leading-relaxed line-clamp-3">{a.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-gold-dark">
                    Leggi la guida <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ELGuidePilastro;
