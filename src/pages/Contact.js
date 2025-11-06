// pages/Contact.js
import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactContainer}>
        <h1 className={styles.contactTitle}>Kontakt</h1>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <h3>Adresa</h3>
            <p>Unesite adresu firme</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Telefon</h3>
            <p>Unesite kontakt telefon</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Email</h3>
            <p>Unesite email adresu</p>
          </div>
          <div className={styles.contactItem}>
            <h3>Radno vrijeme</h3>
            <p>Ponedjeljak - Petak: 9:00 - 17:00</p>
          </div>
        </div>
        
        <form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>Ime i prezime</label>
            <input type="text" id="name" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input type="email" id="email" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.formLabel}>Predmet</label>
            <input type="text" id="subject" className={styles.formInput} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.formLabel}>Poruka</label>
            <textarea id="message" rows="5" className={styles.formTextarea}></textarea>
          </div>
          <button type="submit" className={styles.formButton}>Pošalji poruku</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;