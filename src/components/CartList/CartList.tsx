import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import styles from './CartList.module.css';
import { Item } from '../../types/index';
import { Props } from './Props';
import Modal from '../../components/Modal/Modal';
import loading from '../../assets/loading.gif';
import ModalItem from '../ModalItem/ModalItem';

export default function CartList({ data, isLoading }: Props) {
  const [modal, setModal] = useState(false);
  const [curItemId, setCurItemId] = useState('');

  return (
    <div>
      {isLoading && <img className={styles.loading} src={loading} alt="loading" />}
      <p className={styles.text}>
        {isLoading === false && data.length === 0 && 'search something'}
      </p>
      <ul className={styles.list}>
        {data.map((item: Item) => (
          <Cart key={item.id} item={item} setCurItemId={setCurItemId} setModal={setModal} />
        ))}
      </ul>
      <Modal isOpen={modal} setModal={setModal}>
        <ModalItem idItem={curItemId} />
      </Modal>
    </div>
  );
}
