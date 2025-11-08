// src/components/blog/BlogPost.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MarkdownRenderer from './MarkdownRenderer';
import styles from './Blog.module.css';

// CUSTOM FUNKCIJA ZA FORMAT dd.mm.yyyy
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const BlogPost = ({ blogData, basePath }) => {
  const { slug } = useParams();
  
  const blogPost = blogData.posts.find(post => 
    post.slug === slug && post.published
  );

  if (!blogPost) {
    return (
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <h1>Blog post nije pronađen</h1>
          <p>Traženi blog post ne postoji.</p>
          <Link to={basePath} className={styles.backButton}>
            ← Nazad na blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <Link to={basePath} className={styles.backButton}>
          ← Nazad na blog
        </Link>
        
        <article className={styles.blogPost}>
          <header className={styles.blogPostHeader}>
            <div className={styles.blogPostMeta}>
              <span className={styles.blogPostDate}>
                {formatDate(blogPost.date)}
              </span>
            </div>
            <h1 className={styles.blogPostTitle}>{blogPost.title}</h1>
            <p className={styles.blogPostExcerpt}>{blogPost.excerpt}</p>
          </header>

          {blogPost.image && (
            <div className={styles.blogPostImage}>
              <img src={blogPost.image} alt={blogPost.title} />
            </div>
          )}

          <div className={styles.blogPostContent}>
            <MarkdownRenderer content={blogPost.content} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;