// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Insurance from './pages/Insurance';
import Merge from './pages/Merge';
import Radionica from './pages/Radionica';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import AdminBlog from './pages/AdminBlog';
import Konsultacije from './pages/Konsultacije';
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
            <Route path="/radionica/*" element={<Radionica />} />
            <Route path="/ma/*" element={<Merge />} />
            <Route path="/kontakt/*" element={<Contact />} />
            <Route path="/blog/*" element={<BlogPage />} />
            <Route path="/adminblog" element={<AdminBlog />} />
            <Route path="/konsultacije/*" element={<Konsultacije />} />          
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;