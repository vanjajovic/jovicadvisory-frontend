// pages/sales-academy/Radionice.js
import React from 'react';
import styles from './Academy.module.css';

const Radionice = () => {
  const radionice = [
    {
      id: 1,
      naziv: "Prodajna Prezentacija Masterclass",
      datum: "15. Decembar 2024.",
      trajanje: "1 dan",
      mjesto: "Sarajevo",
      cijena: "150 KM",
      opis: "Intenzivna radionica fokusirana na usavršavanje vještina predstavljanja proizvoda i usluga.",
      naglasak: "Praktične vježbe i instant feedback"
    },
    {
      id: 2,
      naziv: "Napredne Tehnike Pregovaranja",
      datum: "20. Januar 2025.",
      trajanje: "2 dana",
      mjesto: "Online",
      cijena: "200 KM",
      opis: "Radionica za prodajne menadžere i lidere koji žele unaprijediti svoje pregovaračke vještine.",
      naglasak: "Realni scenariji i role-play"
    }
  ];

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Radionice Akademije Prodaje</h1>
        <p className={styles.pageDescription}>
          Naše radionice pružaju intenzivno, praktično iskustvo učenja u malim grupama. 
          Fokusirani smo na interakciju, rješavanje stvarnih izazova i neposrednu primjenu znanja.
        </p>
        
        <div className={styles.radioniceGrid}>
          {radionice.map((radionica) => (
            <div key={radionica.id} className={styles.radionicaCard}>
              <div className={styles.radionicaHeader}>
                <h2>{radionica.naziv}</h2>
                <div className={styles.radionicaCijena}>{radionica.cijena}</div>
              </div>
              
              <div className={styles.radionicaDetails}>
                <p><strong>Datum:</strong> {radionica.datum}</p>
                <p><strong>Trajanje:</strong> {radionica.trajanje}</p>
                <p><strong>Mjesto:</strong> {radionica.mjesto}</p>
              </div>
              
              <p className={styles.radionicaOpis}>{radionica.opis}</p>
              <p className={styles.radionicaNaglasak}><strong>Naglasak:</strong> {radionica.naglasak}</p>
              
              <button className={styles.radionicaButton}>Prijavi se</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Radionice;