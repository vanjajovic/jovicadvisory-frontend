///pages/BusinessTransfer.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuBusiness from '../components/ServiceMenuBusiness';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import blogData from '../data/blog/business-transfer.json';
import styles from './ServicePage.module.css';

// KONZISTENTNO SA OSTALIM SERVICE-IMA - VECI FONT

const MA = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>M&A</h1>
        <p className={styles.pageDescription}>
          Strategija, razvoj i zastupanje u M&A pregovorima i transakcijama.
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

const NextGen = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Naredna generacija</h1>
        <p className={styles.pageDescription}>
          Strategija i razvoj narednoj generaciji.
        </p>
      </div>
    </div>
  );
};

const KontaktPrenosBiznisa = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Prenos biznisa</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za uslugu prenosa biznisa.
        </p>
      </div>
    </div>
  );
};

const BusinessTransfer = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Prenos biznisa</h1>
      </div>
      
      <ServiceMenuBusiness />
      
      <Routes>
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/prenos-biznisa"
              title="Blog - Prenos biznisa"
              description="Najnovije vijesti, savjeti i analize o prenosu vlasništva."
            />
          } 
        />
        
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/prenos-biznisa"
            />
          } 
        />
        
        {/* OSTALE RUTE - KONZISTENTNE VELIČINE */}
        <Route path="ma" element={<MA />} />
        <Route path="deal-sourcing" element={<DealSourcing />} />
        <Route path="next-gen" element={<NextGen />} />
        <Route path="kontakt" element={<KontaktPrenosBiznisa />} />
      </Routes>
    </div>
  );
};

export default BusinessTransfer;