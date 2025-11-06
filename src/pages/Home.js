// pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.heroTitle}>Jović Advisory</h1>
      </div>
      
      <div className={styles.services}>
        <div className={styles.serviceGrid}>
          <Link to="https://vitaxosiguranje.com/" className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Osiguranje</h2>
            <p className={styles.serviceDescription}>
              Kompletno zastupanje u osiguranju sa fokusom na zaštitu vaših interesa
            </p>
          </Link>
          
          <Link to="/akademija-prodaje" className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Akademija prodaje</h2>
            <p className={styles.serviceDescription}>
              Edukativni programi za unapređenje prodajnih vještina i poslovnih performansi
            </p>
          </Link>
          
          <Link to="/prodaja-biznisa" className={styles.serviceCard}>
            <h2 className={styles.serviceTitle}>Prodaja biznisa</h2>
            <p className={styles.serviceDescription}>
              Stručna podrška u procesu prodaje poslovanja i transfera vlasništva
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;