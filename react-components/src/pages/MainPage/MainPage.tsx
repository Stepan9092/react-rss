import React, { Component } from 'react';
import styles from './MainPage.module.css';
import CartList from '../../components/CartList/CartList';

export default class MainPage extends Component {
  state = {
    input: localStorage.getItem('input') || '',
  };

  componentWillUnmount() {
    localStorage.setItem('input', this.state.input);
  }

  render() {
    return (
      <>
        <input
          type="text"
          className={styles.input}
          value={this.state.input}
          onChange={(event) => this.setState({ input: event.target.value })}
        />
        <CartList />
      </>
    );
  }
}
