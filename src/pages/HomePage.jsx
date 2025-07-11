// src/pages/HomePage.jsx

import React from 'react';

// Importa a Navbar unificada
import Navbar from '../components/Navbar/Navbar.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from '../components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from '../components/RecommendedCourses/RecommendedCourses.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Support from '../components/Support/Support.jsx';
import PlatformFeatures from '../components/PlatformFeatures/PlatformFeatures.jsx';
import PartnersMarquee from '../components/PartnersMarquee/PartnersMarquee.jsx';
import Footer from '../components/Footer/Footer.jsx';

// A página passa todas as funções de navegação para a Navbar
function HomePage({ onNavigateToHome, onNavigateToCourses, onNavigateToSupport, onLoginClick, onRegisterClick }) {
  return (
    <>
      <Navbar 
        onNavigateToHome={onNavigateToHome}
        onNavigateToCourses={onNavigateToCourses}
        onNavigateToSupport={onNavigateToSupport}
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
      />
      <main>
        <HeroSection />
        <SpecialtiesSection onNavigate={onNavigateToCourses} />
        <RecommendedCourses onNavigate={onNavigateToCourses} />
        <Testimonials />
        <Support onNavigate={onNavigateToSupport} />
        <PlatformFeatures />
        <PartnersMarquee />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
