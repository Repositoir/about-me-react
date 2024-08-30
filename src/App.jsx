// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import AboutPage from './components/AboutPage';
import GitProjects from './components/GitProjects';
import ContactPage from './components/ContactPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<GitProjects />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;


