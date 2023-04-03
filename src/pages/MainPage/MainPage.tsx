import React, { useEffect, useState } from 'react';
import styles from './MainPage.module.css';
import CartList from '../../components/CartList/CartList';

export default function MainPage() {
  const [input, setInput] = useState(localStorage.getItem('input') || '');
  useEffect(() => localStorage.setItem('input', input));

  return (
    <>
      <input
        data-testid="search"
        type="text"
        className={styles.input}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <CartList />
    </>
  );
}
