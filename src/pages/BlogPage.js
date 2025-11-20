import React, { useState } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import ServiceMenuHome from '../components/ServiceMenuHome';
import MarkdownRenderer from '../components/blog/MarkdownRenderer';
import blogData from '../data/blog/posts.json';
import styles from './ServicePage.module.css';
import blogStyles from '../components/blog/Blog.module.css';

// Blog List komponenta
const BlogList = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const publishedPosts = blogData.posts.filter(post => post.published);
  const sortedBlogs = [...publishedPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const postsToShow = sortedBlogs.slice(0, visiblePosts);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  const loadMore = () => {
    setVisiblePosts(prev => prev + 6);
  };

  return (
    <div className={blogStyles.pageContent}>
      <div className={blogStyles.contentContainer}>
        <h1>Blog</h1>
        <p className={blogStyles.pageDescription}>
          Najnoviji članci, savjeti i analize iz svijeta osiguranja, prodaje i poslovanja.
        </p>
        
        <div className={blogStyles.blogGrid}>
          {postsToShow.map((blog) => (
            <Link 
              to={`/blog/${blog.slug}`}
              key={blog.id}
              className={blogStyles.blogCardLink}
            >
              <article className={blogStyles.blogCard}>
                <div className={blogStyles.blogImage}>
                  <img src={blog.image} alt={blog.title} />
                </div>
                <div className={blogStyles.blogContent}>
                  <div className={blogStyles.blogMeta}>
                    <span className={blogStyles.blogDate}>
                      {formatDate(blog.date)}
                    </span>
                  </div>
                  <h2 className={blogStyles.blogTitle}>{blog.title}</h2>
                  <p className={blogStyles.blogExcerpt}>{blog.excerpt}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More dugme */}
        {visiblePosts < sortedBlogs.length && (
          <div className={blogStyles.loadMoreContainer}>
            <button onClick={loadMore} className={blogStyles.loadMoreButton}>
              Učitaj još
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Blog Post komponenta
const BlogPost = () => {
  const { slug } = useParams();
  
  const blogPost = blogData.posts.find(post => 
    post.slug === slug && post.published
  );

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${String(date.getDate()).padStart(2, '0')}.${String(date.getMonth() + 1).padStart(2, '0')}.${date.getFullYear()}`;
  };

  if (!blogPost) {
    return (
      <div className={blogStyles.pageContent}>
        <div className={blogStyles.contentContainer}>
          <h1>Blog post nije pronađen</h1>
          <p>Traženi blog post ne postoji.</p>
          <Link to="/blog" className={blogStyles.backButtonBottom}>
            ← Povratak na blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={blogStyles.pageContent}>
      <div className={blogStyles.contentContainer}>
        {/* UKLONJENO: Link to="/blog" className={blogStyles.backButton} ← Nazad na blog */}
        
        <article className={blogStyles.blogPost}>
          <header className={blogStyles.blogPostHeader}>
            <div className={blogStyles.blogPostMeta}>
              <span className={blogStyles.blogPostDate}>
                {formatDate(blogPost.date)}
              </span>
            </div>
            <h1 className={blogStyles.blogPostTitle}>{blogPost.title}</h1>
            <p className={blogStyles.blogPostExcerpt}>{blogPost.excerpt}</p>
          </header>

          {blogPost.image && (
            <div className={blogStyles.blogPostImage}>
              <img src={blogPost.image} alt={blogPost.title} />
            </div>
          )}

          <div className={blogStyles.blogPostContent}>
            <MarkdownRenderer content={blogPost.content} />
            
            {/* DUGME NA DNU ČLANKA */}
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <Link to="/blog" className={blogStyles.backButtonBottom}>
                ← Povratak na blog
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

// Glavna BlogPage komponenta
const BlogPage = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Blog</h1>
      </div>
      
      <ServiceMenuHome />
            
      <Routes>
        <Route index element={<BlogList />} />
        <Route path=":slug" element={<BlogPost />} />
      </Routes>
    </div>
  );
};

export default BlogPage;