// src/App.jsx

// 1. Importe o 'useState' junto com o React para gerenciar o estado do modal
import React, { useState } from 'react';
import './App.css';

// Importação de todos os componentes da sua página
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import SpecialtiesSection from './components/SpecialtiesSection/SpecialtiesSection.jsx';
import RecommendedCourses from './components/RecommendedCourses/RecommendedCourses.jsx';
import Testimonials from './components/Testimonials/Testimonials.jsx';
import Support from './components/Support/Support.jsx';
import PlatformFeatures from './components/PlatformFeatures/PlatformFeatures.jsx';
import PartnersMarquee from './components/PartnersMarquee/PartnersMarquee.jsx';
import Footer from './components/Footer/Footer.jsx';
// 2. Importe o componente do Modal que criamos
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';

function App() {
  // 3. Crie a variável de estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 4. Crie as funções que vão alterar o estado
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      {/* 5. Passe a função 'openModal' como uma propriedade para a Navbar */}
      <Navbar onLoginClick={openModal} />
      
      <main>
        <HeroSection />
        <SpecialtiesSection />
        <RecommendedCourses />
        <Testimonials />
        <Support />
        <PlatformFeatures />
        <PartnersMarquee />
      </main>
      
      <Footer />

      {/* 6. Renderize o modal apenas se 'isModalOpen' for verdadeiro.
          Passe a função 'closeModal' para que o modal saiba como se fechar. */}
      {isModalOpen && <RegisterModal onClose={closeModal} />}
    </div>
  );
}

export default App;
