import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import styles from './CartList.module.css';
import Modal from '../../components/Modal/Modal';
import loading from '../../assets/loading.gif';
import ModalItem from '../ModalItem/ModalItem';
import { IPhoto } from '../../types/index';
import { useGetProductsQuery } from '../../store/product/product';
import { useAppSelector } from '../../store/hooks';

export default function CartList() {
  const [modal, setModal] = useState(false);
  const [curItemId, setCurItemId] = useState('');
  const searchValue = useAppSelector((state) => state.search.search);
  const { data, error, isLoading } = useGetProductsQuery({ search: searchValue, page: '1' });

  return (
    <div>
      {isLoading && <img className={styles.loading} src={loading} alt="loading" />}
      <p className={styles.text}>
        {isLoading === false && searchValue === '' && !error && 'search something'}
        {error && 'something went wrong =('}
      </p>
      <ul className={styles.list}>
        {data?.stat !== 'fail' &&
          data?.photos.photo.map((item: IPhoto) => (
            <Cart key={item.id} item={item} setCurItemId={setCurItemId} setModal={setModal} />
          ))}
      </ul>
      <Modal isOpen={modal} setModal={setModal}>
        <ModalItem idItem={curItemId} />
      </Modal>
    </div>
  );
}
