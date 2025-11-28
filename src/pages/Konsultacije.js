import React, { useState } from 'react';
import ServiceMenuKonsultacije from '../components/ServiceMenuKonsultacije';
import styles from './ServicePage.module.css';

// Dodaj EmailJS
import emailjs from 'emailjs-com';

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

  // DETEKCIJA USLUGE
  const getUsluga = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlUsluga = urlParams.get('usluga');
    return urlUsluga || 'osiguranje';
  };

  const trenutnaUsluga = getUsluga();

  const usluge = {
    osiguranje: {
      serviceTitle: 'Konsultacije',
      formTitle: 'Zakažite konsultacije',
      templateId: 'template_wiovzql' // Dodaj kasnije za osiguranje
    },
    mentorstvo: {
      serviceTitle: 'Konsultacije',
      formTitle: 'Zakažite konsultacije',
      templateId: 'template_769v9bh'
    },
    ma: {
      serviceTitle: 'Konsultacije',
      formTitle: 'Zakažite konsultacije',
      templateId: 'template_wiovzql'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS podaci
      const serviceId = 'service_ol8y2lm';
      const templateId = usluge[trenutnaUsluga]?.templateId || 'template_wiovzql';
      const publicKey = 'UejGRX_Xnc55QIKVQ';

      // Podaci za email
      const templateParams = {
        ime: formData.ime,
        email: formData.email,
        telefon: formData.telefon,
        poruka: formData.poruka,
        usluga: trenutnaUsluga
      };

      // Pošalji email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Simuliraj delay za bolji UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Email error:', error);
      alert('Došlo je do greške pri slanju poruke. Pokušajte ponovo.');
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
    const usluga = usluge[trenutnaUsluga] || usluge.osiguranje;
    
    return (
      <div className={styles.servicePage}>
        <div className={styles.serviceHeader}>
          <h1 className={styles.serviceTitle}>{usluga.serviceTitle}</h1>
        </div>
        
        <ServiceMenuKonsultacije />
        
        <div className={styles.pageContent}>
          <div className={styles.contentContainer}>
            <div style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto' }}>
              <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Hvala vam</h1>
              <p className={styles.pageDescription}>
                Vaš upit je uspješno poslan. Kontaktiraćemo vas u najkraćem mogućem roku 
                putem emaila ili telefona da dogovorimo termin konsultacija.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const usluga = usluge[trenutnaUsluga] || usluge.osiguranje;

  return (
    <div className={styles.servicePage}>
      <div className={styles.serviceHeader}>
        <h1 className={styles.serviceTitle}>{usluga.serviceTitle}</h1>
      </div>
      
      <ServiceMenuKonsultacije />
      
      <div className={styles.pageContent}>
        <div className={styles.contentContainer}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
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
        </div>
      </div>
    </div>
  );
};

export default Konsultacije;