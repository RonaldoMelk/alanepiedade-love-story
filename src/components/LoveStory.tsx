import { Calendar, Heart, Sparkles } from "lucide-react";
import phase1img1 from "@/assets/phase1-dating1.jpg";
import phase1img2 from "@/assets/phase1-dating2.jpg";
import phase2img1 from "@/assets/phase2-engaged1.jpg";
import phase2img2 from "@/assets/phase2-engaged2.jpg";
import phase3img1 from "@/assets/phase3-wedding1.jpg";
import phase3img2 from "@/assets/phase3-wedding2.jpg";

const LoveStory = () => {
  const phases = [
    {
      icon: Heart,
      title: "O Início",
      subtitle: "Onde tudo começou",
      description: "Como o próprio Alan costuma contar: 'Ela me deu 3 chutes na bunda (fora) antes de aceitar namorar comigo'. Mas a persistência valeu a pena! E claro, tem também a história de que ele a trocou por uma coca de 2 litros quando foi almoçar na casa dos pais dela pela primeira vez.",
      images: [phase1img1, phase1img2],
      color: "from-primary/10 to-transparent"
    },
    {
      icon: Sparkles,
      title: "O Meio",
      subtitle: "Construindo sonhos juntos",
      description: "O pedido veio e começou a jornada de construir juntos o sonho de se casarem e envelhecerem lado a lado. Cada momento foi especial, cada plano traçado com amor e dedicação.",
      images: [phase2img1, phase2img2],
      color: "from-accent/10 to-transparent"
    },
    {
      icon: Calendar,
      title: "O Hoje",
      subtitle: "Realizando o sonho",
      description: "Depois de 11 anos, como Alan brinca: 'Ela parou de me enrolar e vai me passar pro nome dela'. O sonho de se tornarem um finalmente está se realizando!",
      images: [phase3img1, phase3img2],
      color: "from-primary/10 to-transparent"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossa História de Amor
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma jornada de 11 anos, repleta de amor, risadas e momentos inesquecíveis
          </p>
        </div>

        <div className="space-y-20">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className={`relative ${index % 2 === 0 ? '' : 'md:flex-row-reverse'} flex flex-col md:flex-row gap-8 items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${phase.color} border border-border`}>
                  <phase.icon className="w-6 h-6 text-primary" />
                  <span className="font-semibold text-foreground">{phase.title}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-foreground">
                  {phase.subtitle}
                </h3>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>

              <div className="flex-1 grid grid-cols-2 gap-4">
                {phase.images.map((img, imgIndex) => (
                  <div 
                    key={imgIndex}
                    className="relative aspect-square rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={img} 
                      alt={`${phase.title} - Foto ${imgIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
