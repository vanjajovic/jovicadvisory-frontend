// pages/BusinessSales.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuBusiness from '../components/ServiceMenuBusiness'; // Promijenjen import
import styles from './ServicePage.module.css';

const BusinessSalesMain = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <div className={styles.comingSoon}>
          <p>Biće uskoro</p>
        </div>
        <p>Stranica je u pripremi. Uskoro će biti dostupna sa informacijama o našim uslugama prodaje biznisa.</p>
      </div>
    </div>
  );
};

const Usluge = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Naše usluge</h2>
        <p>Kompletne usluge prodaje biznisa i savjetovanja.</p>
      </div>
    </div>
  );
};

const Proces = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Proces prodaje</h2>
        <p>Kako funkcioniše proces prodaje biznisa.</p>
      </div>
    </div>
  );
};

const Uslovi = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Uslovi saradnje</h2>
        <p>Uslovi pod kojima radimo.</p>
      </div>
    </div>
  );
};

const Konsultacije = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Besplatne konsultacije</h2>
        <p>Zakažite besplatne konsultacije za prodaju vašeg biznisa.</p>
      </div>
    </div>
  );
};

const BusinessSales = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <div className={styles.serviceLogo}>
          <img src="/logo.png" alt="Jović Prodaja biznisa" />
        </div>
        <h1 className={styles.serviceTitle}>Prodaja biznisa</h1>
      </div>
      
      <ServiceMenuBusiness /> {/* Koristi posebni menu za prodaju biznisa */}
      
      <Routes>
        <Route index element={<BusinessSalesMain />} />
        <Route path="usluge" element={<Usluge />} />
        <Route path="proces" element={<Proces />} />
        <Route path="uslovi" element={<Uslovi />} />
        <Route path="konsultacije" element={<Konsultacije />} />
      </Routes>
    </div>
  );
};

export default BusinessSales;