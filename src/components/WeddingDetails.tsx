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
            <div className="aspect-video w-full rounded-xl overflow-hidden mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.738356355188!2d-40.29547542457771!3d-20.319063950661387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb83dae980000001%3A0x7070c9a13ee992e1!2sRestaurante%20Panela%20de%20Barro!5e0!3m2!1spt-BR!2sbr!4v1708466783264!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a 
              href="https://www.google.com/maps?q=restaurante+panela+de+barro+espirito+santo"
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
