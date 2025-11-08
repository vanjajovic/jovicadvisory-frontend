// src/components/blog/BlogList.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Blog.module.css';

const BlogList = ({ blogData, basePath, title, description }) => {
  // Sortiraj po datumu (najnoviji prvi)
  const sortedBlogs = [...blogData.posts]
    .filter(post => post.published)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  // Uzmi 4 najnovija za featured sekciju
  const featuredBlogs = sortedBlogs.slice(0, 4);
  // Ostali za arhivu
  const archivedBlogs = sortedBlogs.slice(4);

  // CUSTOM FUNKCIJA ZA FORMAT dd.mm.yyyy
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
        <h1>{title}</h1>
        <p className={styles.pageDescription}>
          {description}
        </p>
        
        {/* Featured Blogs Grid */}
        <div className={styles.blogGrid}>
          {featuredBlogs.map((blog) => (
            <article key={blog.id} className={styles.blogCard}>
              <div className={styles.blogImage}>
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className={styles.blogContent}>
                <div className={styles.blogMeta}>
                  <span className={styles.blogDate}>
                    {formatDate(blog.date)}
                  </span>
                </div>
                <h2 className={styles.blogTitle}>{blog.title}</h2>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <Link 
                  to={`${basePath}/blog/${blog.slug}`} 
                  className={styles.blogReadMore}
                >
                  Pročitaj više →
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Arhiva blogova */}
        {archivedBlogs.length > 0 && (
          <div className={styles.allBlogsSection}>
            <h2>Arhiva blogova</h2>
            <div className={styles.allBlogsList}>
              {archivedBlogs.map((blog) => (
                <div key={blog.id} className={styles.blogListItem}>
                  <span className={styles.blogListDate}>
                    {formatDate(blog.date)}
                  </span>
                  <Link 
                    to={`${basePath}/blog/${blog.slug}`} 
                    className={styles.blogListTitle}
                  >
                    {blog.title}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;