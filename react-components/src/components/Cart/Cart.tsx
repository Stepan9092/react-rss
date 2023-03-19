import React, { Component } from 'react';
import styles from './Cart.module.css';
import { Props } from './Props';

export default class Cart extends Component<Props> {
  render() {
    const item = this.props.item;

    return (
      <div className={styles.cart}>
        <div className={styles.imageContainer}>
          <img src={item.image} alt="photo" className={styles.image} />
        </div>
        <div className={styles.category}>{item.category}</div>
        <div className={styles.title}>{item.title}</div>
      </div>
    );
  }
}
