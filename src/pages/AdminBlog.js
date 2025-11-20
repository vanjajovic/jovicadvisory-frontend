import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AdminBlog.module.css';

const AdminBlog = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    image: '/images/blog/default.webp'
  });
  const [generatedJson, setGeneratedJson] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'vanja123') {
      setIsLoggedIn(true);
    } else {
      alert('Pogrešna šifra!');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/š/g, 's')
      .replace(/đ/g, 'dj')
      .replace(/č/g, 'c')
      .replace(/ć/g, 'c')
      .replace(/ž/g, 'z')
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };

  const generateJson = () => {
    const slug = generateSlug(formData.title);
    const newPost = {
      id: Date.now(), // Privremeni ID
      slug: slug,
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      date: new Date().toISOString().split('T')[0],
      image: formData.image,
      published: true
    };

    const jsonString = JSON.stringify(newPost, null, 2);
    setGeneratedJson(jsonString);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert('JSON kopiran u clipboard!');
  };

  const clearForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      image: '/images/blog/default.webp'
    });
    setGeneratedJson('');
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.adminContainer}>
        <div className={styles.loginForm}>
          <h1>🔐 Admin Blog</h1>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Unesi šifru"
              className={styles.passwordInput}
              required
            />
            <button type="submit" className={styles.loginButton}>
              ULAZI
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminHeader}>
        <h1>📝 Novi Blog Post</h1>
        <button 
          onClick={() => setIsLoggedIn(false)}
          className={styles.logoutButton}
        >
          Logout
        </button>
      </div>

      <div className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label>Naslov:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Unesi naslov članka"
            className={styles.textInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Kratki opis (excerpt):</label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleInputChange}
            placeholder="Kratki opis koji će se prikazati na kartici"
            className={styles.textareaSmall}
            rows="3"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Slika:</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="/images/blog/naziv-slika.webp"
            className={styles.textInput}
          />
        </div>

        <div className={styles.formGroup}>
          <label>Sadržaj (markdown):</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Zalijepi markdown tekst ovdje..."
            className={styles.textareaLarge}
            rows="15"
          />
        </div>

        <div className={styles.buttonGroup}>
          <button onClick={generateJson} className={styles.generateButton}>
            GENERIŠI JSON
          </button>
          <button onClick={clearForm} className={styles.clearButton}>
            OČISTI
          </button>
        </div>
      </div>

      {generatedJson && (
        <div className={styles.jsonContainer}>
          <h3>🎉 Gotov JSON:</h3>
          <pre className={styles.jsonOutput}>{generatedJson}</pre>
          <button onClick={copyToClipboard} className={styles.copyButton}>
            📋 KOPIRAJ JSON
          </button>
          <div className={styles.instructions}>
            <p><strong>Uputstvo:</strong></p>
            <ol>
              <li>Kopiraj JSON iznad</li>
              <li>Otvori <code>posts.json</code></li>
              <li>Zalijepi u niz <code>posts</code></li>
              <li>Promijeni <code>id</code> na sljedeći broj</li>
              <li>Spremi fajl</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminBlog;