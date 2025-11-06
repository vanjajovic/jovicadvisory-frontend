// pages/Insurance.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuInsurance from '../components/ServiceMenuInsurance'; // Promijenjen import
import styles from './ServicePage.module.css';

const InsuranceMain = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <div className={styles.comingSoon}>
          <p>Biće uskoro</p>
        </div>
        <p>Stranica je u pripremi. Uskoro će biti dostupna sa kompletnim informacijama o našim uslugama zastupanja u osiguranju.</p>
      </div>
    </div>
  );
};

const VrsteOsiguranja = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Vrste osiguranja</h2>
        <p>Detalji o različitim vrstama osiguranja koje nudimo.</p>
      </div>
    </div>
  );
};

const Cjenovnik = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Cjenovnik osiguranja</h2>
        <p>Informacije o cijenama naših usluga osiguranja.</p>
      </div>
    </div>
  );
};

const CestaPitanja = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Česta pitanja</h2>
        <p>Odgovori na najčešća pitanja o osiguranju.</p>
      </div>
    </div>
  );
};

const ContactService = () => {
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
          <img src="/insurance-logo.png" alt="Jović Osiguranje" />
        </div>
        <h1 className={styles.serviceTitle}>Osiguranje</h1>
      </div>
      
      <ServiceMenuInsurance /> {/* Koristi posebni menu za osiguranje */}
      
      <Routes>
        <Route index element={<InsuranceMain />} />
        <Route path="vrste-osiguranja" element={<VrsteOsiguranja />} />
        <Route path="cjenovnik" element={<Cjenovnik />} />
        <Route path="cesta-pitanja" element={<CestaPitanja />} />
        <Route path="kontakt" element={<ContactService />} />
      </Routes>
    </div>
  );
};

export default Insurance;