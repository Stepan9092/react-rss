import React from 'react';
import styles from './Cart.module.css';
import { Props } from './Props';

export default function Cart({ item }: Props) {
  return (
    <li className={styles.cart}>
      <img
        src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}.jpg`}
        alt="photo"
        className={styles.image}
      />
      <div className={styles.title}>{item.title}</div>
    </li>
  );
}
