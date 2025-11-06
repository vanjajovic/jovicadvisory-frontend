// components/Header.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  if (!isHomePage) {
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
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Link to="/">
            <img src="/logo.png" alt="Jović Advisory" />
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link 
                to="https://vitaxosiguranje.com/" 
                className={`${styles.navLink} ${location.pathname === '/osiguranje' ? styles.active : ''}`}
              >
                Osiguranje
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/akademija-prodaje" 
                className={`${styles.navLink} ${location.pathname === '/akademija-prodaje' ? styles.active : ''}`}
              >
                Akademija prodaje
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/prodaja-biznisa" 
                className={`${styles.navLink} ${location.pathname === '/prodaja-biznisa' ? styles.active : ''}`}
              >
                Prodaja biznisa
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link 
                to="/kontakt" 
                className={`${styles.navLink} ${location.pathname === '/kontakt' ? styles.active : ''}`}
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;