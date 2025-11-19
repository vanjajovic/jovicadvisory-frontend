// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import Sales from './pages/Sales';
import Product from './pages/Product';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/osiguranje/*" element={<Insurance />} />
            <Route path="/radionica-prodaje/*" element={<Sales />} />
            <Route path="/radionica-proizvoda/*" element={<Product />} />
            <Route path="/kontakt" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;