import React from 'react';
import type { TCard } from '../card/card';
import Card from '../card/card';
import styles from './cardList.module.css';

interface CardListProps {
  cards: TCard[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div
      className={styles.cardList}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          text={card.text}
          back={card.back}
          icon={card.icon}
        />
      ))}
    </div>
  );
};

export default CardList;