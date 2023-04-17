import React from 'react';
import styles from './Modal.module.css';
import { Props } from './Props';
import close from '../../assets/remove.png';

export default function Modal({ isOpen, setModal, children }: Props) {
  return (
    <div className={`${styles.overlay} ${isOpen && styles.active}`} onClick={() => setModal(false)}>
      <div className={styles.box} onClick={(e) => e.stopPropagation()}>
        <img
          src={close}
          alt="close modal"
          className={styles.close}
          onClick={() => setModal(false)}
        />
        {children}
      </div>
    </div>
  );
}
