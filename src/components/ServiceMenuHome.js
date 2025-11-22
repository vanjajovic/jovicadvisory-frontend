// components/ServiceMenuHome.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuHome = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/blog' },
    { name: 'Osiguranje', path: '/osiguranje' },
    { name: 'Venture studio', path: '/venture' },
    // { name: 'Radionica pravljenja i prodaje', path: '/pravljenje-i-prodaja' }, // SKRIVENO
    { name: 'Kontakt', path: '/kontakt' }
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

export default ServiceMenuHome;