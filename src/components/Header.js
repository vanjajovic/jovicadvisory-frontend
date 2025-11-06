// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCentered}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/logo.png" alt="Jović Advisory" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;