import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ServiceMenuContact from '../components/ServiceMenuContact';
import styles from './ServicePage.module.css';

// KONTAKT INFORMACIJE KOMPONENTA
const KontaktInformacije = () => {
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
  );
};

// KONSULTACIJE KOMPONENTA - SAMOSTALNA (AŽURIRANA)
const Konsultacije = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // SCROLL TO TOP
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JEDNOSTAVNA DETEKCIJA - koristimo window.location
  const getUsluga = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlUsluga = urlParams.get('usluga');
    return urlUsluga || 'osiguranje';
  };

  const trenutnaUsluga = getUsluga();

  const usluge = {
    osiguranje: {
      naziv: 'Konsultacije za osiguranje'
    },
    mentorstvo: {
      naziv: 'Konsultacije za Mentorstvo na izgradnji prodajnih sistema'
    },
    ma: {
      naziv: 'Konsultacije za M&A zastupanje'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
    } catch (error) {
      alert('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hvala vam</h1>
        <p className={styles.pageDescription}>
          Vaš upit je uspješno poslan. Kontaktiraćemo vas u najkraćem mogućem roku 
          putem emaila ili telefona da dogovorimo termin konsultacija.
        </p>
      </div>
    );
  }

  const usluga = usluge[trenutnaUsluga] || usluge.osiguranje;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      {/* INFORMACIJE O USLUZI - KAO KONTAKT INFORMACIJE */}
      <div className={styles.contactInfo}>
        <h1 className={styles.contactCompany}>{usluga.naziv}</h1>
        <p className={styles.pageDescription}>
          {usluga.opis}
        </p>
      </div>

      {/* FORMA - IDENTIČNA KONTAKT FORMI */}
      <h1 className={styles.formTitle}>{usluga.formTitle}</h1>
      
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            type="text"
            name="ime"
            value={formData.ime}
            onChange={handleChange}
            placeholder="Ime i prezime"
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
          <input
            type="tel"
            name="telefon"
            value={formData.telefon}
            onChange={handleChange}
            placeholder="Broj telefona"
            required
          />
        </div>
        
        <div className={styles.formGroup}>
          <textarea
            name="poruka"
            rows="4"
            value={formData.poruka}
            onChange={handleChange}
            placeholder="Opišite ukratko vašu situaciju..."
          />
        </div>
        
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Šaljem...' : 'Pošalji upit'}
        </button>
      </form>
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
      
      <ServiceMenuContact />
      
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <Routes>
            <Route index element={<KontaktInformacije />} />
            <Route path="konsultacije" element={<Konsultacije />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Contact;