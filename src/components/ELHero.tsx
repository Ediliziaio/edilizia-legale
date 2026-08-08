import { Link } from "react-router-dom";
import { ArrowRight, Building2, HomeIcon, ShieldCheck, Scale, FileCheck } from "lucide-react";
import ELHeroBackdrop from "@/components/ELHeroBackdrop";

/**
 * Home a bivio: due porte grandi sopra la piega, "Sono un'impresa" / "Sono un privato".
 * È la scelta architetturale centrale del sito (doppio target, due silo separati).
 */

const doors = [
  {
    icon: Building2,
    title: "Sono un'impresa",
    subtitle: "Imprese edili, subappaltatori, artigiani",
    desc: "Non ti pagano SAL e fatture, ti contestano vizi pretestuosi, il DURC blocca i cantieri o il Fisco contesta i bonus edilizi.",
    href: "/imprese",
    bullets: ["Recupero crediti nel settore edile", "Riserve, varianti e maggiori oneri", "Contenzioso tributario e Superbonus"],
    cta: "Entra nell'area imprese",
  },
  {
    icon: HomeIcon,
    title: "Sono un privato",
    subtitle: "Committenti, acquirenti, condòmini",
    desc: "Difetti nella casa nuova, cantiere abbandonato dopo gli acconti, preventivo raddoppiato o un decreto ingiuntivo da contestare.",
    href: "/privati",
    bullets: ["Difetti costruttivi e garanzia decennale", "Lavori mai finiti o eseguiti male", "Fotovoltaico, cappotto, infissi e verticali"],
    cta: "Entra nell'area privati",
  },
];

const ELHero = () => {
  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
      <ELHeroBackdrop />

      <div className="container mx-auto px-4 py-14 lg:py-20 relative">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur text-white rounded-full text-xs font-semibold mb-6 uppercase tracking-wider border border-white/15">
            <Scale className="w-4 h-4 text-gold" />
            Appalti · Difetti costruttivi · Contenzioso edile
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
            Il diritto dell'edilizia, <br className="hidden md:block" />
            <span className="text-gold">dai due lati del cantiere.</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Ogni contenzioso edilizio si vince conoscendo le carte dell'altra parte. Noi le conosciamo perché
            scriviamo i contratti d'appalto delle imprese e li smontiamo per i committenti: sappiamo quale
            riserva regge, quale perizia tiene in giudizio, quale clausola non verrà mai applicata.
          </p>
        </div>

        {/* Il bivio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {doors.map((door) => (
            <Link
              key={door.title}
              to={door.href}
              className="group bg-white/5 hover:bg-white backdrop-blur rounded-2xl p-7 lg:p-8 border border-white/15 hover:border-gold text-white hover:text-navy transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 group-hover:bg-gold/20 flex items-center justify-center">
                  <door.icon className="w-6 h-6 text-gold group-hover:text-gold-dark" />
                </div>
                <ArrowRight className="w-6 h-6 text-white/40 group-hover:text-gold-dark group-hover:translate-x-1 transition-transform" />
              </div>
              <h2 className="text-2xl font-bold mb-1">{door.title}</h2>
              <p className="text-xs uppercase tracking-wider font-semibold text-gold group-hover:text-gold-dark mb-3">{door.subtitle}</p>
              <p className="text-sm text-white/70 group-hover:text-foreground/70 mb-5 leading-relaxed">{door.desc}</p>
              <ul className="space-y-1.5 mb-6">
                {door.bullets.map((b) => (
                  <li key={b} className="text-sm text-white/80 group-hover:text-foreground/80 flex items-start gap-2">
                    <span className="text-gold mt-1 text-xs">●</span>
                    {b}
                  </li>
                ))}
              </ul>
              <span className="inline-flex items-center gap-2 text-sm font-bold text-gold group-hover:text-gold-dark">
                {door.cta}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70 mt-10">
          <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold" /> Verifica dei conflitti di interesse su ogni incarico</span>
          <span className="flex items-center gap-2"><FileCheck className="w-4 h-4 text-gold" /> Analisi del fascicolo prima di ogni azione</span>
          <span className="flex items-center gap-2"><Scale className="w-4 h-4 text-gold" /> Operiamo in tutta Italia</span>
        </div>
      </div>
    </section>
  );
};

export default ELHero;
