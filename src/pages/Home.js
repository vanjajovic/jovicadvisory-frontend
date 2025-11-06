// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Service header look - BEZ LOGA, samo naslov kao na drugim stranicama */}
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Jović Advisory</h1>
        <p className={styles.serviceSubtitle}>Stručno savjetovanje i konsalting usluge</p>
      </div>
      
      {/* Services grid */}
      <div className={styles.services}>
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