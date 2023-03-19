import React, { Component } from 'react';
import styles from './Page404.module.css';
import photo from '../../assets/smile.svg';

export default class Page404 extends Component {
  render() {
    return (
      <div className={styles.page}>
        <div className={styles.info}>
          <div className={styles.title}>404</div>
          <div className={styles.description}>page not found</div>
          <img src={photo} alt="smile" />
        </div>
      </div>
    );
  }
}
