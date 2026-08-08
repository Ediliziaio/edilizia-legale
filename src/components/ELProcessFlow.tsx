import Reveal from "@/components/Reveal";

const steps = [
  {
    n: "01",
    title: "Raccolta del fascicolo",
    desc: "Contratto, preventivi, SAL, foto, messaggi, perizie: raccogliamo tutto quello che esiste. Nel contenzioso edilizio i documenti valgono più degli argomenti.",
  },
  {
    n: "02",
    title: "Analisi e verifica dei termini",
    desc: "Entro 48 ore lavorative ti diciamo in che termine sei, quali strumenti sono praticabili e quali sono già preclusi. Compresa la verifica dei conflitti di interesse.",
  },
  {
    n: "03",
    title: "Strategia con i costi chiari",
    desc: "Ti proponiamo il percorso — stragiudiziale, ATP, monitorio o giudizio — con un preventivo scritto prima dell'incarico. Anche quando il consiglio è non fare causa.",
  },
  {
    n: "04",
    title: "Esecuzione e aggiornamenti",
    desc: "Gestiamo diffide, perizie e giudizio, con aggiornamenti a ogni passaggio rilevante. Il fascicolo resta tuo, ordinato e consultabile.",
  },
];

const ELProcessFlow = () => (
  <section className="py-16 lg:py-24 bg-muted/40">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <p className="text-gold-dark uppercase tracking-widest text-sm font-semibold mb-3">Come lavoriamo</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-navy mb-5 leading-tight">
            Prima i documenti, poi la strategia. Sempre in quest'ordine.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed">
            Descriviamo il metodo, non promettiamo risultati: l'esito di un contenzioso dipende dai documenti e
            dalle circostanze del caso concreto. Quello che possiamo garantire è il processo con cui lo affrontiamo.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120}>
            <div className="bg-white rounded-2xl p-7 border border-border shadow-card h-full relative overflow-hidden">
              <span className="absolute -top-3 -right-2 text-7xl font-extrabold text-navy/5 select-none">{s.n}</span>
              <span className="inline-block text-xs font-bold text-gold-dark bg-gold/10 rounded-full px-3 py-1 mb-4">
                Fase {s.n}
              </span>
              <h3 className="text-lg font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ELProcessFlow;
