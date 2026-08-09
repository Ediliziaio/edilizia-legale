import Reveal from "@/components/Reveal";
import ELImageSlot from "@/components/ELImageSlot";
import { Split, ShieldCheck, Users } from "lucide-react";

/**
 * Il nodo del doppio target trasformato in prova di competenza:
 * il messaggio centrale del brand + le tre regole operative.
 */
const rules = [
  {
    icon: Split,
    title: "Due percorsi separati",
    desc: "Aree, contenuti e moduli distinti per imprese e privati. Chi entra in un percorso non riceve mai il punto di vista dell'altro, se non qui in home.",
  },
  {
    icon: ShieldCheck,
    title: "Mai nella stessa vicenda",
    desc: "Verifichiamo ogni incarico prima di accettarlo e non assumiamo mandati contro parti già assistite. La policy sui conflitti di interesse è pubblica.",
  },
  {
    icon: Users,
    title: "Anche per i tecnici",
    desc: "Direttori dei lavori, progettisti, coordinatori della sicurezza e amministratori: assistenza sui profili di responsabilità professionale.",
  },
];

const ELProblemSolution = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center max-w-6xl mx-auto mb-14">
        <Reveal>
          <div>
            <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Perché due lati</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-6 leading-tight">
              L'avvocato dell'altra parte sa già cosa farai. Il tuo dovrebbe sapere cosa farà lui.
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Chi scrive i contratti d'appalto sa dove si rompono. Chi smonta le contestazioni pretestuose sa come se
              ne costruisce una fondata. Lavoriamo sui due lati del cantiere — mai nella stessa vicenda — e per questo
              conosciamo in anticipo le mosse dell'altra parte: quale riserva regge, quale perizia tiene in giudizio,
              quale clausola non verrà mai applicata.
            </p>
          </div>
        </Reveal>
        <Reveal delay={150} direction="right">
          <ELImageSlot id="home-due-lati" className="rounded-2xl aspect-[4/3] shadow-card" />
        </Reveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {rules.map((r, i) => (
          <Reveal key={r.title} delay={i * 120}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-card h-full">
              <div className="w-11 h-11 rounded-xl bg-navy flex items-center justify-center mb-4">
                <r.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{r.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ELProblemSolution;
