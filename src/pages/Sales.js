// pages/Sales.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuSales from '../components/ServiceMenuSales';
import styles from './ServicePage.module.css';

// MENTORSTVO KAO POČETNA STRANICA
const Mentorstvo = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mentorstvo</h1>
        <p className={styles.pageDescription}>
          Personalizovani programi mentorstva za unapređenje prodajnih vještina.
        </p>
        
        <div className={styles.mentorstvoGrid}>
          <div className={styles.mentorstvoCard}>
            <h2>Individualni Mentorstvo Program</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Personalizovane sesije 1 na 1</li>
                <li>Analiza vaših specifičnih izazova</li>
                <li>Prilagođene strategije i taktike</li>
                <li>Redovni feedback i praćenje napretka</li>
                <li>Dugoročni plan razvoja</li>
              </ul>
            </div>
          </div>
          
          <div className={styles.mentorstvoCard}>
            <h2>Grupni Mentorstvo Program</h2>
            <div className={styles.mentorstvoPrednosti}>
              <ul>
                <li>Rad u malim grupama (max 5 osoba)</li>
                <li>Kolaborativno učenje i dijeljenje iskustava</li>
                <li>Grupe sličnih nivoa iskustva</li>
                <li>Networking sa kolegama</li>
                <li>Povoljnija cijena od individualnog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MA = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>M&A zastupanje</h1>
        <p className={styles.pageDescription}>
          Zastupanje u procesu prodaje biznisa.
        </p>
      </div>
    </div>
  );
};

const KontaktSales = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Radionica prodaje</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije za Radionicu prodaje.
        </p>
      </div>
    </div>
  );
};

const Sales = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Radionica prodaje</h1>
      </div>
      
      <ServiceMenuSales />
      
      <Routes>
        {/* MENTORSTVO KAO POČETNA STRANICA */}
        <Route index element={<Mentorstvo />} />
        
        {/* OSTALE RUTE */}
        <Route path="m&a" element={<MA />} />
        <Route path="kontakt" element={<KontaktSales />} />
      </Routes>
    </div>
  );
};

export default Sales;