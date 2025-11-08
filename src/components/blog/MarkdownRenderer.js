// src/components/blog/MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './Blog.module.css';

const MarkdownRenderer = ({ content }) => {
  return (
    <div className={styles.markdownContent}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;