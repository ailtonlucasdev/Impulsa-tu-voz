// src/App.jsx

import React from 'react';
import './App.css';

// Importação de todos os componentes
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses.jsx';
import PlatformFeatures from './components/PlatformFeatures/PlatformFeatures.jsx';
import PartnersMarquee from './components/PartnersMarquee/PartnersMarquee.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <RecommendedCourses />
        <PlatformFeatures />
        <PartnersMarquee />
      </main>
      <Footer />
    </div>
  );
}

export default App;
