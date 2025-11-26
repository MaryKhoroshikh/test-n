import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useFlipOnScroll = (
  ref: RefObject<HTMLDivElement | null>,
  delay = 2000, // задержка в мс (по умолчанию 2 сек)
  enableFlip: boolean 
) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!enableFlip) return;
    
    const handleScroll = () => {
      const cardRect = ref.current?.getBoundingClientRect();
      if (cardRect) {
        // Карточка переворачивается, когда её верх в центре экрана
        if (cardRect.top < window.innerHeight / 2 && cardRect.bottom > 0) {
          setIsFlipped(true);
        } else {
          setIsFlipped(false);
        }
      }
    };

    const timeoutId = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, delay]);

  return isFlipped;
};
