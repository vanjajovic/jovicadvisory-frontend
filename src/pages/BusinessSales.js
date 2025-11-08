// pages/BusinessSales.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuBusiness from '../components/ServiceMenuBusiness';
import styles from './ServicePage.module.css';

// NOVE KOMPONENTE PO ZAHTJEVU
const BlogProdajaBiznisa = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Blog - Prodaja biznisa</h2>
        <p>Najnovije vijesti, savjeti i analize o prodaji biznisa i M&A transakcijama.</p>
      </div>
    </div>
  );
};

const MAReadiness = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>M&A Readiness</h2>
        <p>Priprema vašeg biznisa za M&A transakcije i procjenu vrijednosti.</p>
      </div>
    </div>
  );
};

const MAZastupanje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>M&A Zastupanje</h2>
        <p>Kompletno zastupanje u M&A pregovorima i transakcijama.</p>
      </div>
    </div>
  );
};

const DealSourcing = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Deal Sourcing</h2>
        <p>Pronalaženje i evaluacija investicionih prilika.</p>
      </div>
    </div>
  );
};

const KontaktProdajaBiznisa = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h2>Kontakt - Prodaja biznisa</h2>
        <p>Kontakt informacije specifične za odjel prodaje biznisa.</p>
      </div>
    </div>
  );
};

const BusinessSales = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Prodaja biznisa</h1>
      </div>
      
      <ServiceMenuBusiness />
      
      <Routes>
        <Route index element={<BlogProdajaBiznisa />} /> {/* Blog kao početna */}
        <Route path="blog" element={<BlogProdajaBiznisa />} />
        <Route path="blog/:id" element={<BlogProdajaBiznisa />} /> {/* Za buduće postove */}
        <Route path="ma-readiness" element={<MAReadiness />} />
        <Route path="ma-zastupanje" element={<MAZastupanje />} />
        <Route path="deal-sourcing" element={<DealSourcing />} />
        <Route path="kontakt" element={<KontaktProdajaBiznisa />} />
      </Routes>
    </div>
  );
};

export default BusinessSales;