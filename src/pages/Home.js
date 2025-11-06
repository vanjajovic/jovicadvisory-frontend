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
          <a href="https://vitaxosiguranje.com/" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Osiguranje</h2>
            <p className={styles.serviceCardDescription}>
              Kompletno zastupanje u osiguranju sa fokusom na zaštitu vaših interesa
            </p>
          </a>
          
          <Link to="/akademija-prodaje" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Akademija prodaje</h2>
            <p className={styles.serviceCardDescription}>
              Edukativni programi za unapređenje prodajnih vještina i poslovnih performansi
            </p>
          </Link>
          
          <Link to="/prodaja-biznisa" className={styles.serviceCard}>
            <h2 className={styles.serviceCardTitle}>Prodaja biznisa</h2>
            <p className={styles.serviceCardDescription}>
              Stručna podrška u procesu prodaje poslovanja i transfera vlasništva
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;