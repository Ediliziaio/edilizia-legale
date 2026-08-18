import { Link } from "react-router-dom";
import { Mail, Phone, Shield, Linkedin } from "lucide-react";
import { ELLogo } from "@/components/ELHeader";
import { PHONE_TEL, PHONE_DISPLAY, EMAIL, PEC } from "@/data/site";

const ELFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-14 lg:py-20">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="space-y-4">
            <ELLogo light />
            <p className="text-white/70 text-sm leading-relaxed">
              Studio legale dedicato al diritto dell'edilizia: assistiamo le imprese su appalti, crediti e
              fisco di cantiere, e i privati nei contenziosi con le imprese di costruzione. Mai nella stessa vicenda.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-gold hover:text-navy text-white/80 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Per le imprese</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/guide/recupero-crediti-edilizia" className="text-white/70 hover:text-gold">Recupero crediti edilizia</Link></li>
              <li><Link to="/guide/sal-non-pagato" className="text-white/70 hover:text-gold">SAL non pagato</Link></li>
              <li><Link to="/guide/subappaltatore-non-pagato" className="text-white/70 hover:text-gold">Subappaltatore non pagato</Link></li>
              <li><Link to="/guide/accertamento-superbonus-imprese" className="text-white/70 hover:text-gold">Accertamenti Superbonus</Link></li>
              <li><Link to="/guide/durc-irregolare" className="text-white/70 hover:text-gold">DURC irregolare</Link></li>
              <li><Link to="/imprese" className="text-gold hover:text-gold-light font-medium">Tutte le aree imprese →</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Per i privati</h2>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/guide/difetti-costruttivi-casa-nuova" className="text-white/70 hover:text-gold">Difetti costruttivi casa nuova</Link></li>
              <li><Link to="/guide/impresa-sparita-cantiere-abbandonato" className="text-white/70 hover:text-gold">Impresa sparita</Link></li>
              <li><Link to="/guide/fotovoltaico-non-produce" className="text-white/70 hover:text-gold">Fotovoltaico che non produce</Link></li>
              <li><Link to="/guide/opposizione-decreto-ingiuntivo-impresa-edile" className="text-white/70 hover:text-gold">Opposizione a decreto ingiuntivo</Link></li>
              <li><Link to="/guide/cappotto-termico-difettoso" className="text-white/70 hover:text-gold">Cappotto termico difettoso</Link></li>
              <li><Link to="/privati" className="text-gold hover:text-gold-light font-medium">Tutte le aree privati →</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-white mb-4">Contatti e studio</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`tel:${PHONE_TEL}`} className="text-white/70 hover:text-gold">{PHONE_DISPLAY}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <a href={`mailto:${EMAIL}`} className="text-white/70 hover:text-gold break-all">{EMAIL}</a>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <div className="text-white/70 leading-snug break-all">
                  <span className="block text-[10px] uppercase tracking-wider text-white/50 font-semibold mb-0.5">PEC</span>
                  <a href={`mailto:${PEC}`} className="hover:text-gold">{PEC}</a>
                </div>
              </li>
              <li><Link to="/studio" className="text-white/70 hover:text-gold">Lo studio</Link></li>
              <li><Link to="/studio/conflitti-di-interesse" className="text-white/70 hover:text-gold">Conflitti di interesse</Link></li>
              <li><Link to="/domande-frequenti" className="text-white/70 hover:text-gold">Domande frequenti</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom legal row */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {year} Edilizia Legale. Tutti i diritti riservati. P.IVA — in fase di registrazione.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/cookie" className="hover:text-gold">Cookie Policy</Link>
            <Link to="/note-legali" className="hover:text-gold">Note legali</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ELFooter;
