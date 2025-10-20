import { MapPin, Clock, DollarSign, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const WeddingDetails = () => {
  const copyPix = () => {
    navigator.clipboard.writeText("costagomesalan@gmail.com");
    toast({
      title: "PIX copiado!",
      description: "A chave PIX foi copiada para a área de transferência",
    });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/30 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Detalhes do Casamento
          </h2>
          <p className="text-lg text-muted-foreground">
            Aguardamos você para celebrar conosco!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <Clock className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">Data & Hora</h3>
            <p className="text-lg text-muted-foreground">
              30 de Outubro de 2025
            </p>
            <p className="text-lg text-muted-foreground">
              Às 11h da manhã
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
            <MapPin className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-2 text-foreground">Local</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Restaurante Panela de Barro
            </p>
            <a 
              href="https://www.google.com/maps?sca_esv=6e4820828e77e658&output=search&q=restaurante+panela+de+barro+espirito+santo&source=lnms&fbs=AIIjpHydJdUtNKrM02hj0s4nbm4yAFb4PvhjIUcDtaFHkK_tyuYI-oop_yy363GIWnDaQcLdffliJc5eOXOgXlGZ1RFDUJYLhzZUo7x4MeTOv5cdy1LQoCjD_dKTOV55Pgg8ZyG255VZNdcvLxthXQjGQutN65wzEl47_V4SGDX70YXJNuQzdWX8x1D0WYb40VJ2CBMjekpBdC_FclNgiKZk9PeTZZckbg&entry=mc&ved=1t:200715&ictx=111"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline"
            >
              <MapPin className="w-4 h-4" />
              <span>Ver no Google Maps</span>
            </a>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
          <DollarSign className="w-12 h-12 text-accent mb-4" />
          <h3 className="text-2xl font-bold mb-4 text-foreground">Confirme sua Presença</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Para confirmar sua presença, contribua com R$ 35,00 via PIX:
          </p>
          
          <div className="bg-secondary/50 rounded-xl p-6 border border-border">
            <p className="text-sm text-muted-foreground mb-2">Chave PIX:</p>
            <div className="flex items-center gap-3 flex-wrap">
              <code className="text-lg font-mono text-foreground flex-1 break-all">
                costagomesalan@gmail.com
              </code>
              <Button 
                onClick={copyPix}
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Copy className="w-4 h-4 mr-2" />
                Copiar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingDetails;
