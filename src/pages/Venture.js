import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuVenture from '../components/ServiceMenuVenture';
import styles from './ServicePage.module.css';

// PROJEKTI STRANICA - OSTAJE U KODU ALI JE SKRIVENA
const Projekti = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Projekti</h1>
        <p className={styles.pageDescription}>
          Projekti u razvoju
        </p>
        
        <div className={styles.projektiGrid}>
          <div className={styles.projektCard}>
            <h2>Vitaximmo App</h2>
            <div className={styles.projektOpis}>
              <p><strong>Aplikacija za upravljanje osiguranjem</strong></p>
              <ul>
                <li>Centralizovano upravljanje polisama osiguranja</li>
                <li>Automatsko obavještavanje o rokovima</li>
                <li>Digitalna prijava šteta</li>
                <li>Analitika i izvještavanje</li>
                <li>Integracija sa osiguravajućim kućama</li>
              </ul>
            </div>
          </div>          
        </div>
      </div>
    </div>
  );
};

// MENTORSTVO KAO POČETNA STRANICA
const Mentorstvo = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mentorstvo</h1>
        <p className={styles.pageDescription}>
          Program mentorstva za unapređenje prodajnih sistema.
        </p>
        
        <div className={styles.mentorstvoGrid}>
          <div className={styles.mentorstvoCard}>
            <h2>Sadržaj programa</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Personalizovani rad</li>
                <li>Analiza specifičnih izazova</li>
                <li>Prilagođena strategija i taktike</li>
                <li>Redovni feedback i praćenje napretka</li>
                <li>Dugoročni plan razvoja</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MA = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>M&A zastupanje</h1>
        <p className={styles.pageDescription}>
          Zastupanje u procesu prodaje biznisa.
        </p>
      </div>
    </div>
  );
};

const KontaktVenture = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Radionica prodaje</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije za radionicu.
        </p>
      </div>
    </div>
  );
};

const Venture = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica prodaje</h1>
      </div>
      
      <ServiceMenuVenture />
      
      <Routes>
        {/* MENTORSTVO KAO POČETNA STRANICA */}
        <Route index element={<Mentorstvo />} />
        
        {/* OSTALE RUTE - PROJEKTI SKRIVENI */}
        {/* <Route path="projekti" element={<Projekti />} /> */}
        <Route path="m&a" element={<MA />} />
        <Route path="kontakt" element={<KontaktVenture />} />
      </Routes>
    </div>
  );
};

export default Venture;