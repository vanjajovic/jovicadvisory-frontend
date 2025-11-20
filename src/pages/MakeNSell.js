// pages/MakeNSell.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Uklonjen useLocation
import ServiceMenuMakeNSell from '../components/ServiceMenuMakeNSell';
import styles from './ServicePage.module.css';

// MJESEČNE RADIONICE KAO POČETNA STRANICA
const MjesecneRadionice = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mjesečne radionice</h1>
        <p className={styles.pageDescription}>
          Mjesečne radionice pravljenja proizvoda uživo.
        </p>
      </div>
    </div>
  );
};

const Snimljeno = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Snimljeno</h1>
        <p className={styles.pageDescription}>
          Snimljeni materijali.
        </p>
      </div>
    </div>
  );
};

const KontaktMakeNSell = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Radionica pravljenja i prodaje</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za radionicu pravljenja i prodaje.
        </p>
      </div>
    </div>
  );
};

const MakeNSell = () => {
  // Uklonjen: const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica proizvoda</h1>
      </div>
      
      <ServiceMenuMakeNSell />
      
      <Routes>
        {/* MJESEČNE RADIONICE KAO POČETNA STRANICA */}
        <Route index element={<MjesecneRadionice />} />
        
        {/* OSTALE RUTE */}
        <Route path="snimljeno" element={<Snimljeno />} />
        <Route path="kontakt" element={<KontaktMakeNSell />} />
        
        {/* BLOG JE POTPUNO UKLONJEN */}
      </Routes>
    </div>
  );
};

export default MakeNSell;