// pages/Insurance.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuInsurance from '../components/ServiceMenuInsurance';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import blogData from '../data/blog/insurance.json';
import styles from './ServicePage.module.css';

// KONZISTENTNO SA SALES ACADEMY - VECI FONT
const PodrskaOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Podrška za Osiguranje</h1>
        <p className={styles.pageDescription}>
          Pomoć i podrška za sva pitanja vezana uz osiguranje.
        </p>
      </div>
    </div>
  );
};

const VitaximmoAppOsiguranje = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Vitaximmo App za Osiguranje</h1>
        <p className={styles.pageDescription}>
          Naša mobilna aplikacija za upravljanje osiguranjima.
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
          Kontakt informacije specifične za odjel osiguranja.
        </p>
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
        {/* BLOG KAO POČETNA SA SHARED KOMPONENTAMA */}
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/osiguranje"
              title="Blog o Osiguranju"
              description="Najnovije vijesti, savjeti i analize iz svijeta osiguranja. Budite informisani o promjenama zakona, novim vrstama osiguranja i optimalnim rješenjima za vaše potrebe."
            />
          } 
        />
        
        {/* BLOG POSTOVI SA SHARED KOMPONENTAMA */}
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/osiguranje"
            />
          } 
        />
        
        {/* OSTALE RUTE - KONZISTENTNE VELIČINE */}
        <Route path="podrska" element={<PodrskaOsiguranje />} />
        <Route path="vitaximmo-app" element={<VitaximmoAppOsiguranje />} />
        <Route path="kontakt" element={<KontaktOsiguranje />} />
      </Routes>
    </div>
  );
};

export default Insurance;