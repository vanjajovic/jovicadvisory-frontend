// pages/BusinessSales.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuBusiness from '../components/ServiceMenuBusiness';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import blogData from '../data/blog/business-sales.json';
import styles from './ServicePage.module.css';

// KONZISTENTNO SA OSTALIM SERVICE-IMA - VECI FONT
const MAReadiness = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>M&A Readiness</h1>
        <p className={styles.pageDescription}>
          Priprema vašeg biznisa za M&A transakcije i procjenu vrijednosti.
        </p>
      </div>
    </div>
  );
};

const MAZastupanje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>M&A Zastupanje</h1>
        <p className={styles.pageDescription}>
          Kompletno zastupanje u M&A pregovorima i transakcijama.
        </p>
      </div>
    </div>
  );
};

const DealSourcing = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Deal Sourcing</h1>
        <p className={styles.pageDescription}>
          Pronalaženje i evaluacija investicionih prilika i potencijalnih kupaca.
        </p>
      </div>
    </div>
  );
};

const KontaktProdajaBiznisa = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Prodaja biznisa</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za odjel prodaje biznisa.
        </p>
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
        {/* BLOG KAO POČETNA SA SHARED KOMPONENTAMA */}
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/prodaja-biznisa"
              title="Blog - Prodaja biznisa"
              description="Najnovije vijesti, savjeti i analize o prodaji biznisa i M&A transakcijama. Ekspertski uvidi u procese valuacije, pregovaranja i tranzicije vlasništva."
            />
          } 
        />
        
        {/* BLOG POSTOVI SA SHARED KOMPONENTAMA */}
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/prodaja-biznisa"
            />
          } 
        />
        
        {/* OSTALE RUTE - KONZISTENTNE VELIČINE */}
        <Route path="ma-readiness" element={<MAReadiness />} />
        <Route path="ma-zastupanje" element={<MAZastupanje />} />
        <Route path="deal-sourcing" element={<DealSourcing />} />
        <Route path="kontakt" element={<KontaktProdajaBiznisa />} />
      </Routes>
    </div>
  );
};

export default BusinessSales;