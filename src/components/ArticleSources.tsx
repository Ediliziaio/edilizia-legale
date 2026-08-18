import { Scale } from "lucide-react";
import type { Block } from "@/data/articles";

/**
 * Riferimenti normativi citati nella guida, estratti dal testo.
 *
 * Su materia legale l'elenco verificabile delle fonti è ciò che distingue un
 * contenuto redatto da un professionista da uno riassunto altrove — ed è il
 * primo posto dove un motore generativo cerca conferma prima di citare.
 * Si compila da solo: nessun lavoro redazionale, nessuna fonte da aggiornare
 * a mano quando il testo cambia.
 */

const PATTERNS: RegExp[] = [
  // art. 1667 c.c. / artt. 1667 e 1669 c.c. / art. 1460, comma 2, c.c.
  /artt?\.\s*\d+(?:-[a-z]+)?(?:\s*,\s*(?:comma|co\.)\s*\d+)?\s*(?:c\.c\.|c\.p\.c\.|c\.p\.)/gi,
  // D.lgs. 36/2023 — D.lgs. 74/2000
  /D\.?\s?lgs\.\s*\d+\/\d{4}/gi,
  // L. 212/2000
  /\bL\.\s*\d+\/\d{4}/g,
  // D.P.R. 380/2001
  /D\.?P\.?R\.?\s*\d+\/\d{4}/gi,
];

const testoDi = (b: Block): string[] => {
  const out: string[] = [];
  if ("text" in b && typeof b.text === "string") out.push(b.text);
  if ("items" in b && Array.isArray(b.items)) {
    for (const it of b.items) {
      if (typeof it === "string") out.push(it);
      else if (it && typeof it === "object") {
        if ("q" in it) out.push(it.q, it.a);
        else if ("principle" in it) out.push(it.principle, it.impact ?? "");
      }
    }
  }
  if (b.type === "table") out.push(...b.rows.flat(), ...b.headers);
  if (b.type === "timeline") for (const s of b.steps) out.push(s.label, s.detail ?? "");
  if (b.type === "caselaw") for (const c of b.items) out.push(c.court, c.ref ?? "");
  return out;
};

/** Normalizza per il confronto: "Art.  1667 C.C." e "art. 1667 c.c." sono la stessa fonte. */
const chiave = (s: string) => s.toLowerCase().replace(/\s+/g, " ").trim();

export const estraiFonti = (content: Block[]): string[] => {
  const testo = content.flatMap(testoDi).join("\n");
  const viste = new Map<string, string>();
  for (const re of PATTERNS) {
    re.lastIndex = 0;
    for (const m of testo.matchAll(re)) {
      const raw = m[0].replace(/\s+/g, " ").trim();
      if (!viste.has(chiave(raw))) viste.set(chiave(raw), raw);
    }
  }
  return [...viste.values()].sort((a, b) => a.localeCompare(b, "it"));
};

const ArticleSources = ({ content }: { content: Block[] }) => {
  const fonti = estraiFonti(content);
  if (fonti.length < 2) return null;

  return (
    <section className="mt-12 border border-border rounded-2xl overflow-hidden">
      <h2 className="flex items-center gap-2.5 bg-muted/60 px-6 py-4 text-base font-bold text-navy border-b border-border">
        <Scale className="w-4 h-4 text-gold-dark shrink-0" />
        Riferimenti normativi citati in questa guida
      </h2>
      <ul className="px-6 py-5 flex flex-wrap gap-x-2 gap-y-2.5">
        {fonti.map((f) => (
          <li
            key={f}
            className="text-sm font-medium text-navy bg-muted/50 border border-border rounded-lg px-2.5 py-1"
          >
            {f}
          </li>
        ))}
      </ul>
      <p className="px-6 pb-5 text-xs text-foreground/50 leading-relaxed">
        Il testo vigente delle norme è consultabile su Normattiva. La normativa è in costante evoluzione: le
        indicazioni valgono alla data di aggiornamento della guida.
      </p>
    </section>
  );
};

export default ArticleSources;
