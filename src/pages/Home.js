// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import ServiceMenuHome from '../components/ServiceMenuHome';
import styles from './ServicePage.module.css'; // ← PROMIJENI OVO!

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
          
          <Link to="/prodajna-radionica" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Prodajna radionica</h2>
            <p className={styles.serviceCardDescription}>
              Edukativni programi za unapređenje prodaje
            </p>
          </Link>
          
          <Link to="/prenos-biznisa" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Prenos biznisa</h2>
            <p className={styles.serviceCardDescription}>
              Stručna podrška u procesu prenosa poslovanja
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;