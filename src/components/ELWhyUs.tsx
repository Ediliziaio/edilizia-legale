import Reveal from "@/components/Reveal";
import { BookOpen, FileSearch, Landmark, MessageSquareText } from "lucide-react";

const points = [
  {
    icon: BookOpen,
    title: "Una sola materia",
    desc: "Appalti, cantieri, vizi, fisco dell'edilizia. Non facciamo altro: la profondità su una materia vale più dell'ampiezza su dieci.",
  },
  {
    icon: FileSearch,
    title: "Il fascicolo prima di tutto",
    desc: "Nessuna azione parte senza aver letto i documenti. Ti diciamo anche quando la causa non conviene: è parte del lavoro.",
  },
  {
    icon: Landmark,
    title: "Il fisco del cantiere",
    desc: "Superbonus, reverse charge, responsabilità solidale: presidiamo il contenzioso tributario dell'edilizia, dove pochi uniscono le due competenze.",
  },
  {
    icon: MessageSquareText,
    title: "Linguaggio chiaro",
    desc: "Le guide di questo sito dicono le stesse cose che diciamo in studio: termini, strade percorribili e costi, senza latinismi inutili.",
  },
];

const ELWhyUs = () => (
  <section className="py-16 lg:py-24 bg-navy text-white">
    <div className="container mx-auto px-4">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <p className="text-gold uppercase tracking-widest text-sm font-semibold mb-3">Perché Edilizia Legale</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 leading-tight">
            Uno studio verticale, non un reparto di uno studio generalista.
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7 h-full">
              <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-gold" />
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed">{p.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default ELWhyUs;
