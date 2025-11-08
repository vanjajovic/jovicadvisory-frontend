// components/ServiceMenuBusiness.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuBusiness = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/prodaja-biznisa' }, // Blog kao početna
    { name: 'M&A Readiness', path: '/prodaja-biznisa/ma-readiness' },
    { name: 'M&A Zastupanje', path: '/prodaja-biznisa/ma-zastupanje' },
    { name: 'Deal Sourcing', path: '/prodaja-biznisa/deal-sourcing' },
    { name: 'Kontakt', path: '/prodaja-biznisa/kontakt' }
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