// components/ServiceMenuAcademy.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuAcademy = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/akademija-prodaje' },
    { name: 'Mentorstvo', path: '/akademija-prodaje/mentorstvo' },
    { name: 'Radionice', path: '/akademija-prodaje/radionice' },
    { name: 'Kontakt', path: '/akademija-prodaje/kontakt' } // DODAJTE OVO
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

export default ServiceMenuAcademy;