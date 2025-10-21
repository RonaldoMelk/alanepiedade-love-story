import { useEffect, useCallback, useRef } from 'react';

interface Petal {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
}

export function RosePetals() {
  const petalsRef = useRef<Petal[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const petalCountRef = useRef(0);

  const createPetal = useCallback(() => {
    const left = `${Math.random() * 100}%`;
    const animationDuration = `${Math.random() * 10 + 5}s`; // 5-15 segundos
    const animationDelay = `${Math.random() * 5}s`; // 0-5 segundos
    const id = petalCountRef.current++;

    const petal: Petal = {
      id,
      left,
      animationDuration,
      animationDelay,
    };

    petalsRef.current = [...petalsRef.current, petal];
    return petal;
  }, []);

  const removePetal = useCallback((id: number) => {
    petalsRef.current = petalsRef.current.filter(p => p.id !== id);
  }, []);

  useEffect(() => {
    // Cria pétalas iniciais
    const initialPetals = Array.from({ length: 15 }, () => createPetal());
    petalsRef.current = initialPetals;

    // Adiciona novas pétalas periodicamente
    const interval = setInterval(() => {
      if (petalsRef.current.length < 30) { // Limita o número máximo de pétalas
        const petal = createPetal();
        if (containerRef.current) {
          const petalElement = document.createElement('div');
          petalElement.className = 'rose-petal';
          petalElement.style.left = petal.left;
          petalElement.style.animationDuration = petal.animationDuration;
          petalElement.style.animationDelay = petal.animationDelay;
          
          // Emoji de coração
          const hearts = ['❤️', '💖', '💝', '💕', '💗'];
          const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
          petalElement.textContent = randomHeart;

          containerRef.current.appendChild(petalElement);

          // Remove a pétala depois da animação
          setTimeout(() => {
            if (containerRef.current?.contains(petalElement)) {
              containerRef.current.removeChild(petalElement);
              removePetal(petal.id);
            }
          }, (parseFloat(petal.animationDuration) + parseFloat(petal.animationDelay)) * 1000);
        }
      }
    }, 2000); // Nova pétala a cada 2 segundos

    return () => {
      clearInterval(interval);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      petalsRef.current = [];
    };
  }, [createPetal, removePetal]);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50" />;
}