import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout() {
  const location = useLocation();

  return (
    <>
      <Header pathname={location.pathname} />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
