import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import styles from './CartList.module.css';
import { Item } from '../../types/index';

export default function CartList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
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
