// components/ServiceMenuBusiness.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuProduct = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/radionica-proizvoda' }, // Blog kao početna
    { name: 'Mjesečno', path: '/radionica-proizvoda/mjesecne-radionice' },
    { name: 'Snimljeno', path: '/radionica-proizvoda/snimljeno' },
    { name: 'Kontakt', path: '/radionica-proizvoda/kontakt' }
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

export default ServiceMenuProduct;