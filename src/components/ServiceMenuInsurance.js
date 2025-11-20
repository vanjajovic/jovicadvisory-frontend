// components/ServiceMenuInsurance.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuInsurance = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Vitaximmo app', path: '/osiguranje' }, // Početna stranica
    { name: 'Zastupanje u osiguranju', path: 'https://vitaxosiguranje.com/', external: true },
    { name: 'Kontakt', path: '/osiguranje/kontakt' }
    // Podrška uklonjena
  ];

  return (
    <nav className={styles.serviceMenu}>
      <div className={styles.serviceMenuContainer}>
        <ul className={styles.serviceMenuList}>
          {servicePages.map((page) => (
            <li key={page.path} className={styles.serviceMenuItem}>
              {page.external ? (
                <a 
                  href={page.path}
                  className={styles.serviceMenuLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {page.name}
                </a>
              ) : (
                <Link 
                  to={page.path}
                  className={`${styles.serviceMenuLink} ${
                    location.pathname.startsWith(page.path) ? styles.active : ''
                  }`}
                >
                  {page.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default ServiceMenuInsurance;