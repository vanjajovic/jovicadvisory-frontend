import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuVenture = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Projekti', path: '/venture/projekti' },
    { name: 'Mentorstvo', path: '/venture' }, // Početna stranica
    { name: 'M&A zastupanje', path: '/venture/m&a' },
    { name: 'Kontakt', path: '/venture/kontakt' }
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

export default ServiceMenuVenture;