import React, { useState } from 'react';
import ServiceMenuHome from '../components/ServiceMenuHome';
import styles from './ServicePage.module.css';

// KONTAKT KOMPONENTA
const Kontakt = () => {
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
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div className={styles.contactInfo}>
            <h1 className={styles.contactCompany}>Jović Advisory</h1>
            <p className={styles.pageDescription}>
              Jug Bogdana 18, Banja Luka
            </p>
            <p className={styles.pageDescription}>
              info@jovicadvisory.com
            </p>
          </div>

          <h1 className={styles.formTitle}>Pošaljite poruku</h1>
          
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

// GLAVNA CONTACT KOMPONENTA
const Contact = () => {
  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>Kontakt</h1>
      </div>
      
      <ServiceMenuHome />
      
      <Kontakt />
    </div>
  );
};

export default Contact;