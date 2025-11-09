// components/ServiceMenuAcademy.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenuAcademy = () => {
  const location = useLocation();
  
  const servicePages = [
    { name: 'Blog', path: '/prodajna-radionica' },
    { name: 'Mentorstvo', path: '/prodajna-radionica/mentorstvo' },
    { name: 'Radionice', path: '/prodajna-radionica/radionice' },
    { name: 'Kontakt', path: '/prodajna-radionica/kontakt' } // DODAJTE OVO
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