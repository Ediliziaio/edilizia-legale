import { useEffect, useRef, useState } from "react";
import { articlesMeta } from "@/data/articlesMeta";
import { areeImprese, areePrivati } from "@/data/aree";

/**
 * Striscia numeri con count-up all'ingresso in viewport.
 * Solo dati fattuali del sito/metodo — niente percentuali di successo (art. 35 CDF).
 */
// I conteggi si leggono dai dati, non si scrivono a mano: pubblicare una guida
// non deve poter rendere falsa la home.
const stats = [
  { value: 2, suffix: "", label: "lati del cantiere, mai nella stessa causa" },
  { value: areeImprese.length + areePrivati.length, suffix: "", label: "aree di assistenza tra imprese e privati" },
  { value: articlesMeta.length, suffix: "", label: "guide con termini, passi ed esempi concreti" },
  { value: 48, suffix: "h", label: "lavorative per la prima analisi del fascicolo" },
];

/**
 * Il valore di partenza è quello finale, non zero: l'HTML prerenderizzato deve
 * contenere i numeri veri (i crawler AI non eseguono JS). L'animazione riparte
 * da zero solo quando c'è JavaScript e la sezione entra in viewport.
 */
const useCountUp = (target: number, run: boolean, durationMs = 1200) => {
  const [value, setValue] = useState(target);
  useEffect(() => {
    if (!run) return;
    // Se l'animazione non può girare — moto ridotto richiesto, oppure scheda in
    // secondo piano dove requestAnimationFrame resta sospeso — si mostra subito
    // il numero vero. Un conteggio congelato a metà è peggio di nessun conteggio.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.visibilityState !== "visible"
    ) {
      setValue(target);
      return;
    }
    let raf = 0;
    setValue(0);
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / durationMs, 1);
      // ease-out cubico
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    // Rete di sicurezza: comunque vada, a fine corsa il numero è quello giusto.
    const fine = window.setTimeout(() => setValue(target), durationMs + 400);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fine);
      setValue(target);
    };
  }, [run, target, durationMs]);
  return value;
};

const StatItem = ({ value, suffix, label, run }: { value: number; suffix: string; label: string; run: boolean }) => {
  const n = useCountUp(value, run);
  return (
    <div className="text-center px-4">
      <div className="text-4xl lg:text-5xl font-extrabold text-gold tabular-nums">
        {n}
        {suffix}
      </div>
      <p className="text-sm text-white/70 mt-2 leading-snug max-w-[220px] mx-auto">{label}</p>
    </div>
  );
};

const ELStats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-navy border-b border-white/10 py-10 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-white/10">
          {stats.map((s) => (
            <StatItem key={s.label} {...s} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ELStats;
