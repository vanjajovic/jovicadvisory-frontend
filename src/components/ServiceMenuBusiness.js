// components/ServiceMenuBusiness.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuBusiness = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Početna', path: '/prodaja-biznisa' },
    { name: 'Usluge', path: '/prodaja-biznisa/usluge' },
    { name: 'Proces', path: '/prodaja-biznisa/proces' },
    { name: 'Uslovi', path: '/prodaja-biznisa/uslovi' },
    { name: 'Konsultacije', path: '/prodaja-biznisa/konsultacije' }
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

export default ServiceMenuBusiness;