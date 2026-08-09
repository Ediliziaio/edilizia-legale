import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { PHONE_TEL, PHONE_DISPLAY } from "@/data/site";

interface ELHeaderProps {
  onOpenContact: () => void;
}

const navItems = [
  { to: "/", label: "Home" },
  { to: "/imprese", label: "Per le imprese" },
  { to: "/privati", label: "Per i privati" },
  { to: "/guide", label: "Guide" },
  { to: "/domande-frequenti", label: "Domande" },
  { to: "/studio", label: "Lo studio" },
  { to: "/contatti", label: "Contatti" },
];

export const ELLogo = ({ light = false }: { light?: boolean }) => (
  <span className="flex items-center gap-2.5">
    <svg viewBox="0 0 64 64" className="w-10 h-10 md:w-11 md:h-11 shrink-0" aria-hidden="true">
      <rect width="64" height="64" rx="12" fill={light ? "hsl(0 0% 100% / 0.1)" : "hsl(217 38% 27%)"} />
      <path d="M14 46 L32 16 L50 46 Z" fill="none" stroke="hsl(45 90% 61%)" strokeWidth="4" strokeLinejoin="round" />
      <rect x="26" y="36" width="12" height="10" fill="hsl(45 90% 61%)" />
    </svg>
    <span className="leading-none text-left">
      <span className={`block font-heading font-extrabold text-xl md:text-2xl tracking-tight ${light ? "text-white" : "text-navy"}`}>
        Edilizia <span className={light ? "text-gold" : "text-gold-dark"}>Legale</span>
      </span>
      <span className={`block text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-semibold mt-1 ${light ? "text-white/60" : "text-foreground/50"}`}>
        Diritto dell'edilizia e degli appalti
      </span>
    </span>
  </span>
);

const ELHeader = ({ onOpenContact }: ELHeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top bar */}
      <div className="hidden lg:block bg-navy text-white text-sm">
        <div className="container mx-auto px-4 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 text-white/80">
            <span>Lo studio legale specializzato solo in edilizia</span>
          </div>
          <a href={`tel:${PHONE_TEL}`} className="flex items-center gap-2 hover:text-gold">
            <Phone className="w-3.5 h-3.5" />
            <span className="font-medium">{PHONE_DISPLAY}</span>
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center shrink-0" aria-label="Edilizia Legale - Home">
              <ELLogo />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? "text-navy bg-muted"
                        : "text-foreground/70 hover:text-navy hover:bg-muted/60"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button
                onClick={onOpenContact}
                className="bg-gold hover:bg-gold-dark text-navy font-semibold"
              >
                Analisi del caso
              </Button>
            </div>

            <button
              className="lg:hidden p-2 relative w-11 h-11 flex items-center justify-center text-navy touch-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Apri menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "rotate-45" : "-translate-y-2"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`absolute w-6 h-0.5 bg-current ${isMobileMenuOpen ? "-rotate-45" : "translate-y-2"}`} />
            </button>
          </div>

          {isMobileMenuOpen && (
            <nav className="lg:hidden py-4 border-t border-border bg-white">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `block py-3 px-3 min-h-[48px] rounded-lg ${
                        isActive
                          ? "text-navy bg-muted font-semibold"
                          : "text-foreground/80 hover:text-navy hover:bg-muted/60"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center gap-2 py-3 px-3 min-h-[48px] rounded-lg text-foreground/80 hover:bg-muted/60"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">{PHONE_DISPLAY}</span>
                </a>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="mt-3 min-h-[48px] w-full bg-gold hover:bg-gold-dark text-navy font-semibold"
                >
                  Richiedi l'analisi del caso
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
};

export default ELHeader;
