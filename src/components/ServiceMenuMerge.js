// components/ServiceMenuStudio.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuMerge = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Prodaja kompanije', path: '/ma' }, // Početna stranica
    { name: 'Deal Sourcing', path: '/ma/dealsourcing' },
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

export default ServiceMenuMerge;