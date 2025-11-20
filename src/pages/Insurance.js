// pages/Insurance.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Uklonjen useLocation
import ServiceMenuInsurance from '../components/ServiceMenuInsurance';
import styles from './ServicePage.module.css';

// VITAXIMMO KAO POČETNA STRANICA
const VitaximmoAppOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Vitaximmo app za osiguranje</h1>
        <p className={styles.pageDescription}>
          Softver za upravljanje osiguranjem.
        </p>
      </div>
    </div>
  );
};

const KontaktOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Osiguranje</h1>
        <p className={styles.pageDescription}>
          Kontakt za usluge osiguranja.
        </p>
      </div>
    </div>
  );
};

const Insurance = () => {
  // Uklonjen: const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLogo}>
        </div>
        <h1 className={styles.serviceTitle}>Osiguranje</h1>
      </div>
      
      <ServiceMenuInsurance />
      
      <Routes>
        {/* VITAXIMMO KAO POČETNA STRANICA */}
        <Route index element={<VitaximmoAppOsiguranje />} />
        
        {/* OSTALE RUTE */}
        <Route path="kontakt" element={<KontaktOsiguranje />} />
      </Routes>
    </div>
  );
};

export default Insurance;