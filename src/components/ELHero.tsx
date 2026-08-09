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
    desc: "Hai chiuso il cantiere a marzo. Siamo ad agosto e il saldo non arriva. Intanto paghi tu: operai, ferro, contributi.",
    href: "/imprese",
    bullets: [
      "Il committente contesta \"vizi\" a voce per non pagare",
      "Un DURC irregolare ti sta bloccando SAL e gare",
      "L'Agenzia contesta i crediti Superbonus",
    ],
    cta: "Vedi cosa puoi fare",
  },
  {
    icon: HomeIcon,
    title: "Sono un privato",
    subtitle: "Committenti, acquirenti, condòmini",
    desc: "Hai pagato gli acconti. Il cantiere è fermo, il telefono squilla a vuoto. E i termini di legge corrono anche se tu aspetti.",
    href: "/privati",
    bullets: [
      "Crepe e infiltrazioni nella casa appena comprata",
      "Preventivo da 84.000 diventato fattura da 127.000",
      "Decreto ingiuntivo ricevuto: hai 40 giorni, non uno di più",
    ],
    cta: "Vedi cosa puoi fare",
  },
];

const ELHero = () => {
  return (
    <section className="relative bg-navy text-white overflow-hidden border-b border-white/10">
      <ELHeroBackdrop />

      <div className="container mx-auto px-4 py-14 lg:py-20 relative">
        <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold/15 backdrop-blur text-gold rounded-full text-sm font-bold mb-6 uppercase tracking-wider border border-gold/30">
            <Scale className="w-4 h-4 text-gold" />
            Lo Studio Legale specializzato solo in Edilizia
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.12]">
            Lavori non pagati. <br className="hidden md:block" />O pagati e mai finiti.
            <span className="block text-gold mt-3">Qualunque sia il tuo lato, è il nostro campo.</span>
          </h1>

          <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Scriviamo i contratti d'appalto per le imprese e li smontiamo per i committenti: conosciamo le carte
            dell'altra parte. Per questo sappiamo in anticipo quale riserva regge, quale perizia tiene in
            giudizio, quale clausola non verrà mai applicata.
          </p>
        </div>

        {/* Il bivio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {doors.map((door) => (
            <Link
              key={door.title}
              to={door.href}
              className="group bg-white/5 hover:bg-white backdrop-blur rounded-2xl p-7 lg:p-8 border border-white/15 hover:border-gold text-white hover:text-navy transition-all duration-300 hover:-translate-y-1.5 hover:shadow-gold"
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
