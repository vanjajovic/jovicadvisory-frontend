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
            <h2 className={styles.serviceCardTitle}>Zastupanje u osiguranju</h2>
            <p className={styles.serviceCardDescription}>
              Planovi osiguranja, ugovaranje osiguranja i pomoć kod naplate štete
            </p>
          </Link>
          
          <Link to="/radionica" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Radionica prodaje</h2>
            <p className={styles.serviceCardDescription}>
              Pravljenje prodajnih sistema i razvoj prodaje
            </p>
          </Link>
          
            <Link to="/ma" className={styles.serviceCard}>
              <h2 className={styles.serviceCardTitle}>M&A</h2>
              <p className={styles.serviceCardDescription}>
                Podrška prodaji kompanija i pronalasku investicionih prilika
              </p>
            </Link>
        </div>
      </div>

    </div>
  );
};

export default Home;