// src/components/radionice/RadionicaPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from '../blog/MarkdownRenderer';
import styles from '../blog/Blog.module.css';

// ISTA FORMAT DATE FUNKCIJA
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const RadionicaPost = ({ radioniceData, basePath }) => {
  const { slug } = useParams();
  
  const radionica = radioniceData.radionice.find(post => 
    post.slug === slug && post.published
  );

  if (!radionica) {
    return (
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <h1>Radionica nije pronađena</h1>
          <p>Tražena radionica ne postoji.</p>
          <Link to={`${basePath}/radionice`} className={styles.backButton}>
            ← Nazad na radionice
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <Link to={`${basePath}/radionice`} className={styles.backButton}>
          ← Nazad na radionice
        </Link>
        
        <article className={styles.blogPost}>
          <header className={styles.blogPostHeader}>
            <div className={styles.blogPostMeta}>
              <span className={styles.blogPostDate}>
                {formatDate(radionica.date)}
              </span>
              <span className={styles.blogPostReadTime}>
                {radionica.duration} • {radionica.location}
              </span>
            </div>
            <h1 className={styles.blogPostTitle}>{radionica.title}</h1>
            <p className={styles.blogPostExcerpt}>{radionica.excerpt}</p>
          </header>

          {radionica.image && (
            <div className={styles.blogPostImage}>
              <img src={radionica.image} alt={radionica.title} />
            </div>
          )}

          <div className={styles.blogPostContent}>
            <MarkdownRenderer content={radionica.content} />
            
            {radionica.status === 'aktivna' && radionica.prijavaLink && (
              <div className={styles.prijavaSection}>
                <a href={radionica.prijavaLink} className={styles.prijavaButton}>
                  Prijavi se na radionicu
                </a>
              </div>
            )}
          </div>
        </article>
      </div>
    </div>
  );
};

export default RadionicaPost;