// src/pages/HomePage.jsx
import React from 'react';

// Importa todas as seções que compõem a landing page
import Navbar from '../components/Navbar/Navbar.jsx';
import HeroSection from '../components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from '../components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from '../components/RecommendedCourses/RecommendedCourses.jsx';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import Support from '../components/Support/Support.jsx';
import PlatformFeatures from '../components/PlatformFeatures/PlatformFeatures.jsx';
import PartnersMarquee from '../components/PartnersMarquee/PartnersMarquee.jsx';
import Footer from '../components/Footer/Footer.jsx';

// A página recebe as props do App.jsx
function HomePage({ onNavigateToCourses, onLoginClick, onRegisterClick }) {
  return (
    <>
      <Navbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main>
        <HeroSection />
        {/* CORREÇÃO: Passamos a função 'onNavigateToCourses' para os componentes que precisam dela */}
        <SpecialtiesSection onNavigate={onNavigateToCourses} />
        <RecommendedCourses onNavigate={onNavigateToCourses} />
        <Testimonials />
        <Support />
        <PlatformFeatures />
        <PartnersMarquee />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
