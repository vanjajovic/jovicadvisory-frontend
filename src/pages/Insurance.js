// pages/Insurance.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Uklonjen useLocation
import ServiceMenuInsurance from '../components/ServiceMenuInsurance';
import styles from './ServicePage.module.css';

// VITAXIMMO KAO POČETNA STRANICA
const Dom = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Osiguranje doma</h1>
        <p className={styles.pageDescription}>
          Program za osiguranje ličnih nekretnina
        </p>
      </div>
    </div>
  );
};

const Posao = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Osiguranje posla</h1>
        <p className={styles.pageDescription}>
          Program za osiguranje poslovnih nekretnina
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

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLogo}>
        </div>
        <h1 className={styles.serviceTitle}>Zastupanje u osiguranju</h1>
      </div>
      
      <ServiceMenuInsurance />
      
      <Routes>
        <Route index element={<Dom />} /> {/* POČETNA STRANICA */}
        <Route path="posao" element={<Posao />} />
        <Route path="kontakt" element={<KontaktOsiguranje />} />
      </Routes>
    </div>
  );
};

export default Insurance;