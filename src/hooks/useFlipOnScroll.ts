
import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export const useFlipOnScroll = (
  ref: RefObject<HTMLDivElement | null>,
  enableFlip: boolean
) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (!enableFlip) return;

    const handleScroll = () => {
      const cardRect = ref.current?.getBoundingClientRect();
      if (!cardRect) return;
      
      const isBelowCenter = cardRect.top <= window.innerHeight / 3;

      if (isBelowCenter) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, enableFlip]);

  return isFlipped;
};