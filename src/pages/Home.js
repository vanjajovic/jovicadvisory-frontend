// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceMenuHome from '../components/ServiceMenuHome';
import styles from './ServicePage.module.css';

const Home = () => {
  return (
    <div className={styles.servicePage}>
      {/* Service Header - BEZ LOGA */}
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Jović Advisory</h1>
      </div>
      
      {/* Service Menu */}
      <ServiceMenuHome />
      
      {/* Services Grid */}
      <div className={styles.pageContent}>
        <div className={styles.serviceGrid}>
          <a href="/osiguranje" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Osiguranje</h2>
            <p className={styles.serviceCardDescription}>
              Zastupanje u osiguranju i softver za upravljanje osiguranjem
            </p>
          </a>
          
          <Link to="/radionica-prodaje" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Radionica prodaje</h2>
            <p className={styles.serviceCardDescription}>
              Unapređenje prodaje
            </p>
          </Link>
          
          <Link to="/radionica-proizvoda" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Radionica proizvoda</h2>
            <p className={styles.serviceCardDescription}>
              Radionica proizvoda
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;