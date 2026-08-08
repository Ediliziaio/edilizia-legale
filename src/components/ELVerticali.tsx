import { Link } from "react-router-dom";
import Reveal from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import { verticali } from "@/data/aree";

/** I verticali di settore: il problema come lo cerca davvero chi lo ha in casa. */
const ELVerticali = () => (
  <section className="py-16 lg:py-24 bg-white">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-10">
          <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Verticali di settore</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
            Il tuo problema ha un nome preciso. Anche la sua soluzione.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Infissi che fischiano, fotovoltaico che non rende, cappotto che si stacca: ogni lavorazione ha la sua
            disciplina, i suoi termini e il suo responsabile. Guide dedicate, una per settore.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {verticali.map((v, i) => (
          <Reveal key={v.guida} delay={(i % 4) * 80}>
            <Link
              to={`/guide/${v.guida}`}
              className="group block bg-muted/40 hover:bg-white rounded-xl p-5 border border-border hover:border-gold hover:shadow-card transition-all h-full"
            >
              <h3 className="font-bold text-navy mb-1.5 flex items-center justify-between gap-2">
                {v.title}
                <ArrowRight className="w-4 h-4 text-foreground/30 group-hover:text-gold-dark shrink-0" />
              </h3>
              <p className="text-sm text-foreground/65 leading-snug">{v.kw}</p>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ELVerticali;
