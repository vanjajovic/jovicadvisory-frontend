// components/ServiceMenuHome.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuHome = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Osiguranje', path: '/osiguranje' },
    { name: 'Prodajna radionica', path: '/prodajna-radionica' },
    { name: 'Prodaja poslovanja', path: '/business' },
    { name: 'Kontakt', path: '/kontakt' }
  ];

  return (
    <nav className={styles.serviceMenu}>
      <div className={styles.serviceMenuContainer}>
        <ul className={styles.serviceMenuList}>
          {servicePages.map((page) => (
            <li key={page.path} className={styles.serviceMenuItem}>
              {page.path.startsWith('http') ? (
                <a href={page.path} className={styles.serviceMenuLink}>
                  {page.name}
                </a>
              ) : (
                <Link to={page.path} className={styles.serviceMenuLink}>
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

export default ServiceMenuHome;