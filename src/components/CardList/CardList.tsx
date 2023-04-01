import Card from '../Card/Card';
import React from 'react';
import { Props } from './Props';
import styles from './CardList.module.css';

export default function CardList({ items }: Props) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cards:</h2>
      <div className={styles.list}>
        {items.map((item) => (
          <Card item={item} key={Date.now().toString() + item.birthday} />
        ))}
      </div>
    </div>
  );
}
