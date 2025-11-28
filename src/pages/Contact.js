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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Pravimo hidden form za FormSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Kreiraj hidden form i submitaj ga
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://formsubmit.co/vanja.jovic@vitaxosiguranje.com';
    
    // Dodaj podatke
    const addField = (name, value) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addField('_subject', 'Nova poruka sa sajta - Kontakt');
    addField('_template', 'table');
    addField('_captcha', 'false');
    addField('ime', formData.ime);
    addField('email', formData.email);
    addField('poruka', formData.poruka);

    // Submit form
    document.body.appendChild(form);
    form.submit();
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
            </div>
            
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Šaljem...' : 'Pošalji'}
            </button>
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