import React, { useRef, type JSX } from 'react';
import styles from './card.module.css';
import { useFlipOnScroll } from '../../hooks/useFlipOnScroll';

export type TCard = {
  title: string;
  text: string;
  back?: string;
  icon?: JSX.Element;
  enableFlip?: boolean;
};

const Card: React.FC<TCard> = ({ 
  title, 
  text, 
  back, 
  icon,
  enableFlip = false
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isFlipped = useFlipOnScroll(cardRef, enableFlip);

  
  
  return (
    <div ref={cardRef} className={`${styles.card} ${isFlipped && enableFlip ? styles.flipped : ''}`}>
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
        { back && (
          <div className={styles.back} >
            <p className={styles.text}>{back}</p>
          </div>
        )}
    </div>
    
  );
};

export default Card;