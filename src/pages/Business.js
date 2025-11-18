///pages/BusinessTransfer.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuBusiness from '../components/ServiceMenuBusiness';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import blogData from '../data/blog/business.json';
import styles from './ServicePage.module.css';

// KONZISTENTNO SA OSTALIM SERVICE-IMA - VECI FONT

const Zastupanje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Zastupanje</h1>
        <p className={styles.pageDescription}>
          Zastupanje u M&A pregovorima i transakcijama.
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
          Pronalaženje i evaluacija investicionih prilika.
        </p>
      </div>
    </div>
  );
};

const KontaktBusiness = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Prodaja poslovanja</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za uslugu prodaje poslovanja.
        </p>
      </div>
    </div>
  );
};

const Business = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Prodaja poslovanja</h1>
      </div>
      
      <ServiceMenuBusiness />
      
      <Routes>
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/business"
              title="Blog - Prodaja poslovanja"
              description="Najnovije vijesti, savjeti i analize o prodaji poslovanja."
            />
          } 
        />
        
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/business"
            />
          } 
        />
        
        {/* OSTALE RUTE - KONZISTENTNE VELIČINE */}
        <Route path="zastupanje" element={<Zastupanje />} />
        <Route path="deal-sourcing" element={<DealSourcing />} />
        <Route path="kontakt" element={<KontaktBusiness />} />
      </Routes>
    </div>
  );
};

export default Business;