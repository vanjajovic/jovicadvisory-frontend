///pages/BusinessTransfer.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuProduct from '../components/ServiceMenuProduct';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import blogData from '../data/blog/product.json';
import styles from './ServicePage.module.css';

// KONZISTENTNO SA OSTALIM SERVICE-IMA - VECI FONT

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

const KontaktProduct = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Radionica proizvoda</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za radionicu proizvoda.
        </p>
      </div>
    </div>
  );
};

const Product = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica proizvoda</h1>
      </div>
      
      <ServiceMenuProduct />
      
      <Routes>
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/product"
              title="Blog - Radionica proizvoda"
              description="Najnovije iz radionice proizvoda."
            />
          } 
        />
        
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/product"
            />
          } 
        />
        
        {/* OSTALE RUTE - KONZISTENTNE VELIČINE */}
        <Route path="mjesecne-radionice" element={<MjesecneRadionice />} />
        <Route path="snimljeno" element={<Snimljeno />} />
        <Route path="kontakt" element={<KontaktProduct />} />
      </Routes>
    </div>
  );
};

export default Product;