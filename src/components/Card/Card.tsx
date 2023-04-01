import React from 'react';
import { Props } from './Props';
import styles from './Card.module.css';

export default function Card({ item }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.field}>{item.name}</div>
      <div className={styles.field}>{item.gender}</div>
      <img src={item.photo} alt="photo" className={styles.photo} />
      <div className={styles.field}>{item.birthday}</div>
      <div className={styles.field}>{item.country}</div>
    </div>
  );
}
