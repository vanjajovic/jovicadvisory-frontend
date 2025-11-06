// pages/sales-academy/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import blogData from '../../data/blogData.json';
import styles from './Blog.module.css';

const BlogPost = () => {
  const { slug } = useParams();
  const blogPost = blogData.find(post => post.slug === slug);

  if (!blogPost) {
    return (
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <h1>Blog post nije pronađen</h1>
          <p>Traženi blog post ne postoji.</p>
          <Link to="/akademija-prodaje" className={styles.backButton}>
            ← Nazad na blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <Link to="/akademija-prodaje" className={styles.backButton}>
          ← Nazad na blog
        </Link>
        
        <article className={styles.blogPost}>
          <header className={styles.blogPostHeader}>
            <div className={styles.blogPostMeta}>
              <span className={styles.blogPostDate}>{blogPost.date}</span>
              <span className={styles.blogPostReadTime}>{blogPost.readTime} čitanja</span>
            </div>
            <h1 className={styles.blogPostTitle}>{blogPost.title}</h1>
            <p className={styles.blogPostExcerpt}>{blogPost.excerpt}</p>
          </header>

          <div className={styles.blogPostImage}>
            <img src={blogPost.image} alt={blogPost.title} />
          </div>

          <div className={styles.blogPostContent}>
            <p>Ovo je primjer sadržaja blog posta. U stvarnoj implementaciji, 
            ovdje bi bio kompletan sadržaj članka sa formatiranjem, slikama, 
            i drugim elementima.</p>
            
            <p>Možete koristiti rich text editor ili markdown za formatiranje 
            sadržaja blog postova.</p>
            
            <h2>Podnaslov</h2>
            <p>Dodatni sadržaj i informacije...</p>
            
            <blockquote>
              Inspirativni citat ili važna napomena iz članka.
            </blockquote>
            
            <p>Završne misli i zaključak članka.</p>
          </div>

          <footer className={styles.blogPostFooter}>
            <div className={styles.blogPostTags}>
              <span>Oznake:</span>
              <span className={styles.tag}>Prodaja</span>
              <span className={styles.tag}>Edukacija</span>
              <span className={styles.tag}>Strategija</span>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;