// components/Footer.js
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>
            Jović Advisory © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;