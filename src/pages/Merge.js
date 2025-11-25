// pages/Merge.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Uklonjen useLocation
import ServiceMenuMerge from '../components/ServiceMenuMerge';
import styles from './ServicePage.module.css';

// MJESEČNE RADIONICE KAO POČETNA STRANICA
const MA = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Prodaja kompanije</h1>
        <p className={styles.pageDescription}>
          Podrška u procesu prodaja kompanije
        </p>
      </div>
    </div>
  );
};

const DealSourcing = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Deal sourcing</h1>
        <p className={styles.pageDescription}>
          Podrška u pronalasku investicionih prilika
        </p>
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
        {/* MJESEČNE RADIONICE KAO POČETNA STRANICA */}
        <Route index element={<MA />} />
        <Route path="dealsourcing" element={<DealSourcing />} />
      </Routes>
    </div>
  );
};

export default Merge;