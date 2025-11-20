// components/ServiceMenuMakeNSell.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuMakeNSell = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Mjesečno', path: '/pravljenje-i-prodaja' }, // Početna stranica
    { name: 'Snimljeno', path: '/pravljenje-i-prodaja/snimljeno' },
    { name: 'Kontakt', path: '/pravljenje-i-prodaja/kontakt' }
    // Blog je uklonjen
  ];

  return (
    <nav className={styles.serviceMenu}>
      <div className={styles.serviceMenuContainer}>
        <ul className={styles.serviceMenuList}>
          {servicePages.map((page) => (
            <li key={page.path} className={styles.serviceMenuItem}>
              <Link 
                to={page.path}
                className={`${styles.serviceMenuLink} ${
                  location.pathname.startsWith(page.path) ? styles.active : ''
                }`}
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ServiceMenuMakeNSell;