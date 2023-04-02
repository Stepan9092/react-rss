import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { HeaderProps } from './Props';

export default function Header({ pathname }: HeaderProps) {
  const [page, setPage] = useState('Main Page');
  useEffect(() => {
    if (pathname !== '/about' && pathname !== '/' && pathname !== '/form') {
      setPage('Page not found');
    }
    if (pathname === '/about') setPage('About Us');
    if (pathname === '/form') setPage('Form');
    if (pathname === '/') setPage('Main Page');
  }, [pathname]);

  return (
    <header className={styles.header}>
      <nav className={styles.links}>
        <NavLink to="/about" onClick={() => setPage('About Us')}>
          About Us
        </NavLink>
        <NavLink to="/" onClick={() => setPage('Main Page')}>
          Main Page
        </NavLink>
        <NavLink to="/form" onClick={() => setPage('Form')}>
          Form
        </NavLink>
      </nav>
      <h1 className={styles.title}>{page}</h1>
    </header>
  );
}
