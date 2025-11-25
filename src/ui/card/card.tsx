import React, { useEffect, useRef, useState, type JSX } from 'react';
import styles from './card.module.css';

export type TCard = {
    title: string,
    text: string,
    back?: string,
    icon?: JSX.Element
};

export interface CardProps {
  title: string;
  text: string;
  back?: string;
  icon?: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, text, back, icon }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  // Функция, которую нужно выполнить с задержкой
  const handleScroll = () => {
    const cardRect = cardRef.current?.getBoundingClientRect();
    if (cardRect) {
      // Пример условия: карточка перевернётся, когда её верх будет в центре экрана
      if (cardRect.top < window.innerHeight / 2 && cardRect.bottom > 0) {
        setIsFlipped(true);
      } else {
        setIsFlipped(false);
      }
    }
  };

  // Устанавливаем задержку в 2 секунды перед запуском handleScroll
  const timeoutId = setTimeout(() => {
    // Здесь можно добавить код, который должен выполниться с задержкой
    window.addEventListener('scroll', handleScroll);
  }, 2000); // 2000 мс = 2 сек

  // Очищаем таймер и удаляем слушатель событий при размонтировании компонента
  return () => {
    clearTimeout(timeoutId);
    window.removeEventListener('scroll', handleScroll);
  };
}, [isFlipped]);
  
    return (
    <div ref={cardRef} className={`${styles.card} ${isFlipped ? styles.flipped : ''}`}>
        <div className={`${styles.front}`}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.text}>{text}</p>
            {icon && (
                <div
                className={styles.icon}
                >
                {icon}
                </div>
            )}
            </div>
        <div className={styles.back} >
            <p className={styles.text}>{back}</p>
        </div>
    </div>
    
  );
};

export default Card;