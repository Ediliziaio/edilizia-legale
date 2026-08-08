import { Scale, FileSearch, ShieldCheck, MapPin } from "lucide-react";

const items = [
  { icon: Scale, label: "Solo diritto dell'edilizia e degli appalti" },
  { icon: FileSearch, label: "Prima l'analisi del fascicolo, poi la strategia" },
  { icon: ShieldCheck, label: "Verifica dei conflitti di interesse su ogni incarico" },
  { icon: MapPin, label: "Assistenza in tutta Italia, anche da remoto" },
];

const ELTrustStrip = () => (
  <section className="bg-white border-b border-border">
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <Icon className="w-4.5 h-4.5 w-5 h-5 text-navy" />
            </div>
            <span className="text-sm font-medium text-foreground/80 leading-snug">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ELTrustStrip;
