// pages/SalesAcademy.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ServiceMenuAcademy from '../components/ServiceMenuAcademy';
import Blog from './sales-academy/Blog';
import BlogPost from './sales-academy/BlogPost';
import Mentorstvo from './sales-academy/Mentorstvo';
import Radionice from './sales-academy/Radionice';
import styles from './ServicePage.module.css';

const SalesAcademy = () => {
  const location = useLocation();

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Akademija prodaje</h1>
      </div>
      
      <ServiceMenuAcademy />
      
      <Routes>
        <Route index element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="mentorstvo" element={<Mentorstvo />} />
        <Route path="radionice" element={<Radionice />} />
      </Routes>
    </div>
  );
};

export default SalesAcademy;