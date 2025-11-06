// pages/sales-academy/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../data/blogData.json';
import styles from './Blog.module.css';

const Blog = () => {
  // Sortiraj blog postove po datumu (najnoviji prvi)
  const sortedBlogs = [...blogData.blogPosts].sort((a, b) => {
    const dateA = new Date(a.date.split('.').reverse().join('-'));
    const dateB = new Date(b.date.split('.').reverse().join('-'));
    return dateB - dateA;
  });

  // Uzmi samo 3 najnovija blog posta za prikaz
  const featuredBlogs = sortedBlogs.slice(0, 3);

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Naslov</h1>
        <p className={styles.pageDescription}>
          Pratite najnovije trendove, savjete i strategije iz svijeta prodaje. 
          Naš tim stručnjaka dijeli iskustva koja će vam pomoći da postignete bolje rezultate.
        </p>
        
        <div className={styles.blogGrid}>
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>{blog.date}</span>
                  <span className={styles.blogReadTime}>{blog.readTime}</span>
                </div>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <Link to={`/akademija-prodaje/blog/${blog.slug}`} className={styles.blogReadMore}>
                  Pročitaj više →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Sekcija sa svim blog postovima (opciono) */}
        <div className={styles.allBlogsSection}>
          <h2>Svi blog postovi</h2>
          <div className={styles.allBlogsList}>
            {sortedBlogs.map((blog) => (
              <div key={blog.id} className={styles.blogListItem}>
                <span className={styles.blogListDate}>{blog.date}</span>
                <Link to={`/akademija-prodaje/blog/${blog.id}`} className={styles.blogListTitle}>
                  {blog.title}
                </Link>
                <span className={styles.blogListCategory}>{blog.category}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;