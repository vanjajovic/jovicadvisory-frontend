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

// KONSULTACIJE KOMPONENTA - SAMOSTALNA
const Konsultacije = () => {
  const [formData, setFormData] = useState({
    ime: '',
    email: '',
    telefon: '',
    poruka: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // JEDNOSTAVNA DETEKCIJA - koristimo window.location
  const getUsluga = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlUsluga = urlParams.get('usluga');
    return urlUsluga || 'osiguranje';
  };

  const trenutnaUsluga = getUsluga();

  const usluge = {
    osiguranje: {
      naziv: 'Osiguranje',
      opis: 'Konsultacije za osiguranje, polise i Vitaximmo aplikaciju.',
      prednosti: [
        'Analiza postojećih polisa',
        'Preporuka optimalnog pokrića', 
        'Demo Vitaximmo aplikacije',
        'Odgovori na sva pitanja'
      ]
    },
    mentorstvo: {
      naziv: 'Mentorstvo',
      opis: 'Programi mentorstva za unapređenje prodajnih vještina.',
      prednosti: [
        'Analiza prodajnih procesa',
        'Strategije za povećanje konverzije',
        'Personalizovani plan razvoja',
        'Praćenje napretka'
      ]
    },
    ma: {
      naziv: 'M&A Zastupanje', 
      opis: 'Stručno zastupanje u procesu prodaje biznisa.',
      prednosti: [
        'Procjena vrijednosti biznisa',
        'Priprema za prodaju',
        'Povezivanje sa kupcima',
        'Pravno i finansijsko savjetovanje'
      ]
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
    <div>
      <h1>{usluga.naziv}</h1>
      <p className={styles.pageDescription}>
        {usluga.opis}
      </p>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '3rem',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'left'
      }}>
        
        {/* LEVO - INFORMACIJE */}
        <div>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>Šta nudimo:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {usluga.prednosti.map((prednost, index) => (
              <li key={index} style={{ 
                padding: '0.5rem 0', 
                position: 'relative', 
                paddingLeft: '1.5rem',
                color: '#666'
              }}>
                <span style={{ 
                  position: 'absolute', 
                  left: 0, 
                  color: '#000', 
                  fontWeight: 'bold' 
                }}>✓</span>
                {prednost}
              </li>
            ))}
          </ul>
        </div>

        {/* DESNO - FORMA */}
        <div>
          <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600' 
              }}>Ime i prezime</label>
              <input
                type="text"
                name="ime"
                value={formData.ime}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #000',
                  borderRadius: 0,
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600' 
              }}>Email adresa</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #000',
                  borderRadius: 0,
                  fontSize: '1rem'
                }}
              />
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600' 
              }}>Broj telefona</label>
              <input
                type="tel"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #000',
                  borderRadius: 0,
                  fontSize: '1rem'
                }}
                placeholder="+387 61 123 456"
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '0.5rem', 
                fontWeight: '600' 
              }}>Poruka (opciono)</label>
              <textarea
                name="poruka"
                value={formData.poruka}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  border: '1px solid #000',
                  borderRadius: 0,
                  fontSize: '1rem',
                  minHeight: '100px',
                  resize: 'vertical'
                }}
                placeholder="Opišite ukratko vašu situaciju..."
              />
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              style={{
                width: '100%',
                background: '#000',
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                fontSize: '1rem',
                cursor: 'pointer',
                fontWeight: '500'
              }}
            >
              {isSubmitting ? 'Šaljem...' : 'Pošalji upit'}
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