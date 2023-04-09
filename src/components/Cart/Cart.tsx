import React from 'react';
import styles from './Cart.module.css';
import { Props } from './Props';
import { getPhotoUrl } from '../../services/flickr';

export default function Cart({ item, setCurItemId, setModal }: Props) {
  return (
    <li
      className={styles.cart}
      onClick={() => {
        setCurItemId(item.id);
        setModal(true);
      }}
    >
      <img
        src={getPhotoUrl(item.id, item.server, item.secret)}
        alt="photo"
        className={styles.image}
      />
      <div className={styles.title}>{item.title}</div>
    </li>
  );
}
