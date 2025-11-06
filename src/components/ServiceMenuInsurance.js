// components/ServiceMenuInsurance.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuInsurance = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Početna', path: '/osiguranje' },
    { name: 'Vrste osiguranja', path: '/osiguranje/vrste-osiguranja' },
    { name: 'Cjenovnik', path: '/osiguranje/cjenovnik' },
    { name: 'Česta pitanja', path: '/osiguranje/cesta-pitanja' },
    { name: 'Kontakt', path: '/osiguranje/kontakt' }
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
                  location.pathname === page.path ? styles.active : ''
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

export default ServiceMenuInsurance;