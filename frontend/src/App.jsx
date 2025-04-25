import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer.jsx';
import Home from './components/Home';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Feedback from './components/Feedback';
import Admin from './components/Admin'; // Import Admin

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/activities">Activities</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/feedback">Feedback</a></li>
            <li><a href="/admin">Admin</a></li> {/* Admin route */}
          </ul>
        </nav>

        <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />

          {/* Admin Route */}
          <Route path="/admin" element={<Admin />} /> {/* Menampilkan Admin */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

