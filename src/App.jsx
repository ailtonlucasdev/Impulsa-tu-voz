import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from './components/RecommendedCourse/RecommendedCourses.jsx';
import './App.css'; // Importação do seu CSS global.

function App() {
  return (
    <div className="App">
      <Navbar />{}
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <RecommendedCourses></RecommendedCourses>
      </main>
    </div>
  );
}

export default App;