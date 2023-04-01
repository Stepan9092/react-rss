import React from 'react';
import styles from './Cart.module.css';
import { Props } from './Props';

export default function Cart({ item }: Props) {
  return (
    <li className={styles.cart}>
      <div className={styles.imageContainer}>
        <img src={item.image} alt="photo" className={styles.image} />
      </div>
      <div className={styles.category}>{item.category}</div>
      <div className={styles.title}>{item.title}</div>
    </li>
  );
}
