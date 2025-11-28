import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuRadionica from '../components/ServiceMenuRadionica';
import QuestionButton from '../components/QuestionButton';
import styles from './ServicePage.module.css';

// MENTORSTVO KAO POČETNA STRANICA
const Mentorstvo = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mentorstvo</h1>
        <p className={styles.pageDescription}>
          Mentorstvo na gradnji prodajnih sistema
        </p>
        
        <div className={styles.mentorstvoGrid}>
          <div className={styles.mentorstvoCard}>
            <h2>Sadržaj</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Personalizovani rad</li>
                <li>Analiza specifičnih izazova</li>
                <li>Prilagođena strategija i taktike</li>
                <li>Redovni feedback i praćenje napretka</li>
                <li>Dugoročni plan razvoja</li>
              </ul>
             <QuestionButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Aktivno = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Projekti u toku</h1>
        <p className={styles.pageDescription}>
          Aktivni projekti
        </p>
      </div>
    </div>
  );
};

const Zavrseno = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Završeni projekti</h1>
        <p className={styles.pageDescription}>
          Završeni projekti
        </p>
      </div>
    </div>
  );
};

const Radionica = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica prodaje</h1>
      </div>
      
      <ServiceMenuRadionica />
      
      <Routes>
        {/* MENTORSTVO KAO POČETNA STRANICA */}
        <Route index element={<Mentorstvo />} />
        <Route path="aktivno" element={<Aktivno />} />
        <Route path="zavrseno" element={<Zavrseno />} />
      </Routes>
    </div>
  );
};

export default Radionica;