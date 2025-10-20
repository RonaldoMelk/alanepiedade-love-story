import { Heart } from "lucide-react";
import heroImage from "@/assets/hero-wedding.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          backgroundPositionY: "20%" 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      
      <div className="relative z-10 text-center px-4 py-20 max-w-4xl mx-auto">
        <Heart className="w-16 h-16 mx-auto mb-8 text-primary animate-pulse" />
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Alan & Piedade
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-primary" />
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Estamos nos casando!
          </p>
          <div className="h-px w-16 bg-primary" />
        </div>
        
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-[var(--shadow-soft)] border border-border">
          <p className="text-xl md:text-2xl font-semibold text-primary mb-2">
            30 de Outubro de 2025
          </p>
          <p className="text-lg text-muted-foreground">
            Às 11h • Restaurante Panela de Barro
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
