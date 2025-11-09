// pages/SalesAcademy.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuAcademy from '../components/ServiceMenuAcademy';
import BlogList from '../components/blog/BlogList';
import BlogPost from '../components/blog/BlogPost';
import RadioniceList from '../components/radionice/RadioniceList';
import RadionicaPost from '../components/radionice/RadionicaPost';
import blogData from '../data/blog/sales-academy.json';
import radioniceData from '../data/radionice/sales-academy.json';
import styles from './ServicePage.module.css';

// KORISTI BLOG.MODULE.CSS ZA KONZISTENTNOST
const Mentorstvo = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        {/* KORISTI VECI FONT KAO BLOG */}
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

const KontaktAkademija = () => {
  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Kontakt - Prodajna radionica</h1>
        <p className={styles.pageDescription}>
          Kontakt informacije specifične za Prodajnu radionicu.
        </p>
      </div>
    </div>
  );
};

const SalesAcademy = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Prodajna radionica</h1>
      </div>
      
      <ServiceMenuAcademy />
      
      <Routes>
        <Route 
          index 
          element={
            <BlogList 
              blogData={blogData}
              basePath="/prodajna-radionica"
              title="Blog Prodajne radionice"
              description="Pratite najnovije trendove, savjete i strategije iz svijeta prodaje. Naš tim stručnjaka dijeli iskustva koja će vam pomoći da postignete bolje rezultate."
            />
          } 
        />
        
        <Route 
          path="blog/:slug" 
          element={
            <BlogPost 
              blogData={blogData}
              basePath="/prodajna-radionica"
            />
          } 
        />
        
        <Route 
          path="radionice" 
          element={
            <RadioniceList 
              radioniceData={radioniceData}
              basePath="/prodajna-radionica"
            />
          } 
        />
        
        <Route 
          path="radionice/:slug" 
          element={
            <RadionicaPost 
              radioniceData={radioniceData}
              basePath="/prodajna-radionica"
            />
          } 
        />
        
        <Route path="mentorstvo" element={<Mentorstvo />} />
        <Route path="kontakt" element={<KontaktAkademija />} />
      </Routes>
    </div>
  );
};

export default SalesAcademy;