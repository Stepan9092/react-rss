import React from 'react';
import Cart from '../Cart/Cart';
import styles from './CartList.module.css';
import { Item } from '../../types/index';
import { Props } from './Props';

export default function CartList({ data }: Props) {
  return (
    <div>
      <ul className={styles.list}>
        {data.map((item: Item) => (
          <Cart key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
