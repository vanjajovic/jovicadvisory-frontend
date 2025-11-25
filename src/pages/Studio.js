// pages/Studio.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Uklonjen useLocation
import ServiceMenuStudio from '../components/ServiceMenuStudio';
import styles from './ServicePage.module.css';

// MJESEČNE RADIONICE KAO POČETNA STRANICA
const Razvoj = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Projekti u razvoju</h1>
        <p className={styles.pageDescription}>
          Lista projekata u razvoju
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
          Lista završenih projekata
        </p>
      </div>
    </div>
  );
};

const Studio = () => {
  // Uklonjen: const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Venture studio</h1>
      </div>
      
      <ServiceMenuStudio />
      
      <Routes>
        {/* MJESEČNE RADIONICE KAO POČETNA STRANICA */}
        <Route index element={<Razvoj />} />
        <Route path="zavrseno" element={<Zavrseno />} />
      </Routes>
    </div>
  );
};

export default Studio;