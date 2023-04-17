import Card from '../Card/Card';
import React from 'react';
import styles from './CardList.module.css';
import { useAppSelector } from '../../store/hooks';

export default function CardList() {
  const cards = useAppSelector((state) => state.formCards.cards);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cards:</h2>
      <div className={styles.list}>
        {cards.map((item) => (
          <Card item={item} key={Date.now().toString() + Math.random()} />
        ))}
      </div>
    </div>
  );
}
