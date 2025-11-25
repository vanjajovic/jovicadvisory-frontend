import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuRadionica from '../components/ServiceMenuRadionica';
import styles from './ServicePage.module.css';


// MENTORSTVO KAO POČETNA STRANICA
const Mentorstvo = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mentorstvo</h1>
        <p className={styles.pageDescription}>
          Program mentorstva za unapređenje prodaje
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

const Radionica = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica prodajnih sistema</h1>
      </div>
      
      <ServiceMenuRadionica />
      
      <Routes>
        {/* MENTORSTVO KAO POČETNA STRANICA */}
        <Route index element={<Mentorstvo />} />
        <Route path="m&a" element={<MA />} />
      </Routes>
    </div>
  );
};

export default Radionica;