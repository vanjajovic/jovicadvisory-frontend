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
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('ime', formData.ime);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('poruka', formData.poruka);
      formDataToSend.append('_subject', 'Nova poruka sa sajta - Kontakt');

      await fetch('https://formspree.io/f/xqavgavr', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      // Simuliraj delay za bolji UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
      alert('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hvala vam</h1>
            <p className={styles.pageDescription}>
              Vaša poruka je uspješno poslana. Javljamo se uskoro.
            </p>
          </div>
        </div>
      </div>
    );
  }

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