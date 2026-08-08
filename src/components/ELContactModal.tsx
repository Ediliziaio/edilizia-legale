import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ELContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ELContactModal = ({ isOpen, onClose }: ELContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO [DA CONFERMARE]: collegare a un endpoint reale (form provider / email).
    await new Promise((r) => setTimeout(r, 1200));

    setIsSubmitting(false);
    setIsSuccess(true);

    toast({
      title: "Richiesta inviata",
      description: "Ti ricontattiamo entro 48 ore lavorative.",
    });

    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-lg bg-gold/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-navy" />
            </div>
            <DialogTitle className="text-xl text-navy text-left">Raccontaci il tuo caso</DialogTitle>
          </div>
          <p className="text-sm text-foreground/70 text-left">
            Due minuti per compilare. Entro 48 ore lavorative ti diciamo in che termine sei e quali strade
            esistono — anche quando la risposta onesta è "non conviene muoversi". <strong>Tutto riservato,
            nessun impegno.</strong>
          </p>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-10 text-center">
            <div className="w-16 h-16 rounded-full bg-success/15 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9 text-success" />
            </div>
            <h3 className="text-lg font-bold text-navy mb-2">Richiesta ricevuta</h3>
            <p className="text-sm text-foreground/70">Ti contattiamo entro 48 ore lavorative.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="el-name">Nome e cognome *</Label>
                <Input id="el-name" name="name" required placeholder="Nome e cognome" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="el-phone">Telefono *</Label>
                <Input id="el-phone" name="phone" type="tel" required placeholder="+39 ___ _______" />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="el-email">Email *</Label>
              <Input id="el-email" name="email" type="email" required placeholder="nome@email.it" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="el-profile">Sei... *</Label>
                <Select name="profile" required>
                  <SelectTrigger id="el-profile"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="impresa">Un'impresa edile / artigiano</SelectItem>
                    <SelectItem value="privato">Un privato / committente</SelectItem>
                    <SelectItem value="condominio">Un condominio / amministratore</SelectItem>
                    <SelectItem value="tecnico">Un tecnico (DL, progettista, CSE)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="el-topic">Il problema riguarda... *</Label>
                <Select name="topic" required>
                  <SelectTrigger id="el-topic"><SelectValue placeholder="Seleziona" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="crediti">Pagamenti non ricevuti</SelectItem>
                    <SelectItem value="vizi">Difetti o vizi dei lavori</SelectItem>
                    <SelectItem value="contratto">Contratto / preventivo / recesso</SelectItem>
                    <SelectItem value="fisco">Fisco e bonus edilizi</SelectItem>
                    <SelectItem value="decreto">Decreto ingiuntivo ricevuto</SelectItem>
                    <SelectItem value="altro">Altro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="el-message">Descrivi brevemente la situazione</Label>
              <Textarea
                id="el-message"
                name="message"
                rows={3}
                placeholder="Es: ho finito il cantiere a marzo e il committente non paga il saldo di 23.000 euro..."
              />
            </div>

            <label className="flex items-start gap-2 text-xs text-foreground/70">
              <input type="checkbox" required className="mt-0.5" />
              <span>
                Ho letto e accetto la <a href="/privacy" className="text-navy underline">Privacy Policy</a>. I dati saranno trattati solo per gestire la richiesta.
              </span>
            </label>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold hover:bg-gold-dark text-navy font-bold h-11"
            >
              {isSubmitting ? "Invio in corso..." : "Invia la richiesta"}
            </Button>

            <p className="text-xs text-center text-foreground/50">
              🔒 Riservato · Senza impegno · Risposta entro 48h lavorative
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ELContactModal;
