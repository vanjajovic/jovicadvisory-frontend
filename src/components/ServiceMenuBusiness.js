// components/ServiceMenuBusiness.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuBusiness = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/business' }, // Blog kao početna
    { name: 'Zastupanje', path: '/business/zastupanje' },
    { name: 'Deal Sourcing', path: '/business/deal-sourcing' },
    { name: 'Kontakt', path: '/business/kontakt' }
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

export default ServiceMenuBusiness;