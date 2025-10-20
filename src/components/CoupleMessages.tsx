import { Heart } from "lucide-react";

const CoupleMessages = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Mensagens do Casal
          </h2>
          <p className="text-lg text-muted-foreground">
            Palavras de amor um para o outro
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold text-primary mb-4 uppercase tracking-wide">
                Dele para Ela
              </p>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "Nem o doutor estranho encontraria um universo em que eu não me apaixonasse por você, te amo."
              </p>
              <p className="text-right text-muted-foreground mt-6 font-semibold">
                — Alan
              </p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border relative overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl" />
            <div className="relative">
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wide">
                Dela para Ele
              </p>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed italic">
                "Você sempre foi e sempre será meu porto seguro, o amor da minha vida❤️"
              </p>
              <p className="text-right text-muted-foreground mt-6 font-semibold">
                — Piedade
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleMessages;
