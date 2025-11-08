// src/components/radionice/RadioniceList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../blog/Blog.module.css';

const RadioniceList = ({ radioniceData, basePath }) => {
  const aktivne = radioniceData.radionice.filter(r => r.status === 'aktivna');
  const arhiva = radioniceData.radionice.filter(r => r.status === 'arhiva');
  
  // ISTA FORMAT DATE FUNKCIJA
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Radionice</h1>
        <p className={styles.pageDescription}>
          Interaktivne radionice za praktično učenje prodajnih tehnika. 
          Prijavite se na aktuelne radionice ili pogledajte arhivu prošlih događaja.
        </p>
        
        {/* Aktivne radionice - sa prijavom */}
        {aktivne.length > 0 && (
          <section>
            <h2>Aktivne radionice</h2>
            <div className={styles.blogGrid}>
              {aktivne.map(radionica => (
                <article key={radionica.id} className={styles.blogCard}>
                  <div className={styles.blogImage}>
                    <img src={radionica.image} alt={radionica.title} />
                  </div>
                  <div className={styles.blogContent}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogDate}>
                        {formatDate(radionica.date)}
                      </span>
                      <span className={styles.blogReadTime}>{radionica.duration}</span>
                    </div>
                    <h2 className={styles.blogTitle}>{radionica.title}</h2>
                    <p className={styles.blogExcerpt}>{radionica.excerpt}</p>
                    <div className={styles.radionicaMeta}>
                      <span>{radionica.location}</span>
                      <span>{radionica.price}</span>
                    </div>
                    {radionica.prijavaLink && (
                      <a href={radionica.prijavaLink} className={styles.blogReadMore}>
                        Prijavi se →
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        
        {/* Arhiva radionica */}
        {arhiva.length > 0 && (
          <section className={styles.allBlogsSection}>
            <h2>Arhiva radionica</h2>
            <div className={styles.allBlogsList}>
              {arhiva.map(radionica => (
                <div key={radionica.id} className={styles.blogListItem}>
                  <span className={styles.blogListDate}>
                    {formatDate(radionica.date)}
                  </span>
                  <Link 
                    to={`${basePath}/radionice/${radionica.slug}`} 
                    className={styles.blogListTitle}
                  >
                    {radionica.title}
                  </Link>
                  <span className={styles.blogListCategory}>{radionica.location}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default RadioniceList;