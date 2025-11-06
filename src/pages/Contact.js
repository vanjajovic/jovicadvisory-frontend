// pages/Contact.js
import React, { useState } from 'react';
import ServiceMenuContact from '../components/ServiceMenuContact';
import styles from './ServicePage.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    poruka: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Poruka:', formData);
    alert('Hvala! Javljamo se uskoro.');
    setFormData({ ime: '', email: '', poruka: '' });
  };

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Kontakt</h1>
      </div>
      
      <ServiceMenuContact />
      
      <div className={styles.pageContent}>
        <div className={styles.contactContainer}>
          
          <div className={styles.contactInfo}>
            <p className={styles.contactLine}>Jović Advisory</p>
            <p className={styles.contactLine}>Jug Bogdana 18, Banja Luka</p>
            <p className={styles.contactLine}>info@jovicadvisory.com</p>
          </div>

          <h3 className={styles.formTitle}>Pošaljite poruku</h3>
          
          <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="ime"
                value={formData.ime}
                onChange={handleChange}
                placeholder="Ime"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>
            
            <div className={styles.formGroup}>
              <textarea
                name="poruka"
                rows="4"
                value={formData.poruka}
                onChange={handleChange}
                placeholder="Poruka"
                required
              />
            </div>
            
            <button type="submit">Pošalji</button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;