import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuMerge from '../components/ServiceMenuMerge';
import QuestionButton from '../components/QuestionButton';
import styles from './ServicePage.module.css';

const MA = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Prodaja kompanije</h1>
        <p className={styles.pageDescription}>
          Podrška kod prodaje kompanije
        </p>
        
        <div className={styles.mentorstvoGrid}>
          <div className={styles.mentorstvoCard}>
            <h2>Šta nudimo</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Procjena vrijednosti kompanije</li>
                <li>Priprema dokumentacije za prodaju</li>
                <li>Povezivanje sa potencijalnim kupcima</li>
                <li>Pregovaranje o uslovima prodaje</li>
                <li>Pravno i finansijsko savjetovanje</li>
                <li>Podrška tokom cijelog procesa</li>
              </ul>
            </div>
            <QuestionButton 
              text="Imaš li pitanja o prodaji kompanije?"
              to="/konsultacije?usluga=ma"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DealSourcing = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kupovina kompanije</h1>
        <p className={styles.pageDescription}>
          Podrška kod kupovine kompanije
        </p>
        
        <div className={styles.mentorstvoGrid}>
          <div className={styles.mentorstvoCard}>
            <h2>Šta nudimo</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Identifikacija odgovarajućih kompanija</li>
                <li>Analiza investicijskih prilika</li>
                <li>Due diligence proces</li>
                <li>Pregovaranje o kupovini</li>
                <li>Strukturiranje transakcije</li>
                <li>Integracija poslovanja nakon kupovine</li>
              </ul>
            </div>
            <QuestionButton 
              text="Imaš li pitanja o kupovini kompanije?"
              to="/konsultacije?usluga=ma"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Merge = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>M&A</h1>
      </div>
      
      <ServiceMenuMerge />
      
      <Routes>
        <Route index element={<MA />} /> {/* POČETNA STRANICA */}
        <Route path="dealsourcing" element={<DealSourcing />} />
      </Routes>
    </div>
  );
};

export default Merge;