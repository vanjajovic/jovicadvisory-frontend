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
          <Link to="https://vitaxosiguranje.com" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Osiguranje</h2>
            <p className={styles.serviceCardDescription}>
              Zastupanje u osiguranju
            </p>
          </Link>
          
          <Link to="/radionica" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Radionica prodajnih sistema</h2>
            <p className={styles.serviceCardDescription}>
              Pravljenje i implementacija prodajnih sistema
            </p>
          </Link>
          
          {/* SKRIVENO DO AKTIVACIJE - OSTAJE U KODU ALI SE NE VIDI */}
          {false && (
            <Link to="/studio" className={styles.serviceCard}>
              <h2 className={styles.serviceCardTitle}>Venture studio</h2>
              <p className={styles.serviceCardDescription}>
                Pravljenje i prodaja biznisa.
              </p>
            </Link>
          )}
        </div>
      </div>

    </div>
  );
};

export default Home;