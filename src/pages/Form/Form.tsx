import React, { useState } from 'react';
import styles from './Form.module.css';
import CardList from '../../components/CardList/CardList';
import { ICard } from 'types';
import CardForm from '../../components/CardForm/CardForm';

export default function Form() {
  const [cardList, setCardList] = useState<ICard[]>([]);

  return (
    <div className={styles.cnt}>
      <CardForm cardList={cardList} setCardList={setCardList} />
      <CardList items={cardList} />
    </div>
  );
}
