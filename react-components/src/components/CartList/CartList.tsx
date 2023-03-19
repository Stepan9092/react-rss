import React, { Component } from 'react';
import Cart from '../Cart/Cart';
import styles from './CartList.module.css';
import { Item } from '../../types/index';

export default class CartList extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => this.setState({ data: json }));
  }

  render() {
    return (
      <div className={styles.list}>
        {this.state.data.map((item: Item) => (
          <Cart key={item.id} item={item} />
        ))}
      </div>
    );
  }
}
