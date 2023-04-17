import React from 'react';
import styles from './Page404.module.css';
import photo from '../../assets/smile.svg';

export default function Page404() {
  return (
    <div className={styles.page}>
      <h2 className={styles.info}>
        <div className={styles.title}>404</div>
        <div className={styles.description}>page not found</div>
        <img src={photo} alt="smile" />
      </h2>
    </div>
  );
}
