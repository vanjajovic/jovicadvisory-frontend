// pages/Insurance.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuInsurance from '../components/ServiceMenuInsurance';
import styles from './ServicePage.module.css';

// ZADRŽAVAMO SAMO BITNE KOMPONENTE
const BlogOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Blog o Osiguranju</h2>
        <p>Najnovije vijesti i savjeti iz svijeta osiguranja.</p>
      </div>
    </div>
  );
};

const PodrskaOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Podrška za Osiguranje</h2>
        <p>Pomoć i podrška za sva pitanja vezana uz osiguranje.</p>
      </div>
    </div>
  );
};

const VitaximmoAppOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Vitaximmo App za Osiguranje</h2>
        <p>Naša mobilna aplikacija za upravljanje osiguranjima.</p>
      </div>
    </div>
  );
};

const KontaktOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Kontakt - Osiguranje</h2>
        <p>Kontakt informacije specifične za odjel osiguranja.</p>
      </div>
    </div>
  );
};

const Insurance = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLogo}>
        </div>
        <h1 className={styles.serviceTitle}>Osiguranje</h1>
      </div>
      
      <ServiceMenuInsurance />
      
      <Routes>
        <Route index element={<BlogOsiguranje />} /> {/* Blog kao početna */}
        <Route path="blog" element={<BlogOsiguranje />} />
        <Route path="podrska" element={<PodrskaOsiguranje />} />
        <Route path="vitaximmo-app" element={<VitaximmoAppOsiguranje />} />
        <Route path="kontakt" element={<KontaktOsiguranje />} />
      </Routes>
    </div>
  );
};

export default Insurance;