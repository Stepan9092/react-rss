import Card from '../Card/Card';
import React, { Component } from 'react';
import { Props } from './Props';
import styles from './CardList.module.css';

export default class CardList extends Component<Props> {
  render() {
    return (
      <div className={styles.container}>
        <h2 className={styles.title}>Cards:</h2>
        <div className={styles.list}>
          {this.props.items.map((item) => (
            <Card item={item} key={Date.now().toString() + item.birthday} />
          ))}
        </div>
      </div>
    );
  }
}
