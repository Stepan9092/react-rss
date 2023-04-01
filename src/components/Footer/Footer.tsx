import React from 'react';
import styles from './Footer.module.css';
import github from '../../assets/github.png';
import rs from '../../assets/logo_rs_text.svg';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/Stepan9092">
        <img src={github} alt="github" className={styles.githubLogo} data-testid="github" />
      </a>
      <div className={styles.year}>2023</div>
      <a href="https://rs.school">
        <img src={rs} alt="rss" className={styles.rs} data-testid="rss" />
      </a>
    </footer>
  );
}
