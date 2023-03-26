import React, { Component } from 'react';
import { Props } from './Props';
import styles from './Card.module.css';

export default class Card extends Component<Props> {
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.field}>{this.props.item.name}</div>
        <div className={styles.field}>{this.props.item.gender}</div>
        <img src={this.props.item.photo} alt="photo" className={styles.photo} />
        <div className={styles.field}>{this.props.item.birthday}</div>
        <div className={styles.field}>{this.props.item.country}</div>
      </div>
    );
  }
}
