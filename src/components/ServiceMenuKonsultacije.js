import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // DODAJ LINK
import styles from './ServiceMenu.module.css';

const ServiceMenuKonsultacije = () => {
  const location = useLocation();
  
  // Dinamički naslov baziran na URL parametru
  const getNazivUsluge = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const usluga = urlParams.get('usluga');
    
    const usluge = {
      osiguranje: 'Konsultacije za osiguranje',
      mentorstvo: 'Konsultacije za mentorstvo', 
      ma: 'Konsultacije za M&A'
    };
    
    return usluge[usluga] || 'Konsultacije';
  };

  const servicePages = [
    { name: getNazivUsluge(), path: '/konsultacije' }
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

export default ServiceMenuKonsultacije;