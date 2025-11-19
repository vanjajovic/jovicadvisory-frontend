// components/ServiceMenuSales.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuSales = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/radionica-prodaje' },
    { name: 'Mentorstvo', path: '/radionica-prodaje/mentorstvo' },
    { name: 'M&A zastupanje', path: '/radionica-prodaje/m&a' },
    { name: 'Kontakt', path: '/radionica-prodaje/kontakt' } // DODAJTE OVO
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

export default ServiceMenuSales;