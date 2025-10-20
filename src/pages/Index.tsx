import Hero from "@/components/Hero";
import LoveStory from "@/components/LoveStory";
import CoupleMessages from "@/components/CoupleMessages";
import WeddingDetails from "@/components/WeddingDetails";
import GuestBook from "@/components/GuestBook";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LoveStory />
      <CoupleMessages />
      <WeddingDetails />
      <GuestBook />
      
      <footer className="py-8 text-center bg-secondary/30 border-t border-border">
        <p className="text-muted-foreground">
          Alan & Piedade • 30 de Outubro de 2025
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Feito com ❤️ para celebrar nosso amor
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          Desenvolvido por{" "}
          <a 
            href="https://kanxitsolutions.com.br/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            KANX IT SOLUTIONS
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
