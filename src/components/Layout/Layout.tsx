import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import { withRouter } from '../../utils/withRouter';
import Footer from '../Footer/Footer';

const HeaderWithRouter = withRouter(Header);

export default class Layout extends Component {
  render() {
    return (
      <>
        <HeaderWithRouter />
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </>
    );
  }
}
