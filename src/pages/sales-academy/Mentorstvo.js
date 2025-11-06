// pages/sales-academy/Mentorstvo.js
import React from 'react';
import styles from './Academy.module.css';

const Mentorstvo = () => {
  const mentorstvoPaketi = [
    {
      id: 1,
      naziv: "Individualno Mentorstvo",
      opis: "Personalizovane sesije fokusirane na vaše specifične izazove i ciljeve.",
      prednosti: [
        "1-na-1 sesije sa iskusnim mentorom",
        "Personalizovani plan razvoja",
        "Praktične vježbe i case studije",
        "Kontinuirana podrška između sesija"
      ],
      cijena: "Po dogovoru"
    },
    {
      id: 2,
      naziv: "Grupno Mentorstvo",
      opis: "Mentorstvo u malim grupama sa kolegama koji dijele slične izazove.",
      prednosti: [
        "Maksimalno 5 učesnika po grupi",
        "Peer learning i networking",
        "Grupe po sličnim nivolma iskustva",
        "Podela iskustava i najboljih praksi"
      ],
      cijena: "Po dogovoru"
    }
  ];

  return (
    <div className={styles.pageContent}>
      <div className={styles.contentContainer}>
        <h1>Mentorstvo Akademije Prodaje</h1>
        <p className={styles.pageDescription}>
          Naš program mentorstva pruža personalizovanu podršku i vodičstvo 
          za prodavače koji žele ubrzati svoj profesionalni razvoj i postići 
          izvanredne rezultate.
        </p>
        
        <div className={styles.mentorstvoGrid}>
          {mentorstvoPaketi.map((paket) => (
            <div key={paket.id} className={styles.mentorstvoCard}>
              <h2>{paket.naziv}</h2>
              <p className={styles.mentorstvoOpis}>{paket.opis}</p>
              <div className={styles.mentorstvoPrednosti}>
                <h3>Šta je uključeno:</h3>
                <ul>
                  {paket.prednosti.map((prednost, index) => (
                    <li key={index}>{prednost}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.mentorstvoCijena}>
                <strong>{paket.cijena}</strong>
              </div>
              <button className={styles.mentorstvoButton}>
                Zakaži konsultacije
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mentorstvo;