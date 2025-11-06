// components/ServiceMenu.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './ServiceMenu.module.css';

const ServiceMenu = () => {
  const location = useLocation();
  
  console.log('Current path:', location.pathname);
  
  const getCurrentService = () => {
    if (location.pathname.includes('osiguranje')) return 'osiguranje';
    if (location.pathname.includes('akademija-prodaje')) return 'akademija-prodaje';
    if (location.pathname.includes('prodaja-biznisa')) return 'prodaja-biznisa';
    return null;
  };

  const currentService = getCurrentService();
  
  console.log('Current service:', currentService);

  if (!currentService) {
    console.log('No service found, returning null');
    return null;
  }

  const servicePages = [
    { name: 'Blog Akademije prodaje', path: `/${currentService}` },
    { name: 'Mentorstvo Akademije Prodaje', path: `/${currentService}/o-nama` },
    { name: 'Radionica Akademije Prodaje', path: `/${currentService}/usluge` },
    { name: 'Cjenovnik', path: `/${currentService}/cjenovnik` },
    { name: 'Kontakt', path: `/${currentService}/kontakt` }
  ];

  console.log('Service pages:', servicePages);

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

export default ServiceMenu;
