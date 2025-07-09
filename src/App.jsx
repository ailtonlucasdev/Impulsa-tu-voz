// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';

// Importa as PÁGINAS
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import SupportPage from './pages/SupportPage.jsx';

// Importa os MODAIS
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  // Estado para controlar a página atual ('home', 'courses', ou 'support')
  const [currentPage, setCurrentPage] = useState('home');
  // Estado para guardar a categoria de suporte que foi clicada
  const [supportCategory, setSupportCategory] = useState(null);

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // Efeito para rolar para o topo sempre que a página muda
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  
  const switchToRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  // Funções de navegação
  const navigateToHome = () => setCurrentPage('home');
  const navigateToCourses = () => setCurrentPage('courses');
  const navigateToSupport = (category) => {
    setSupportCategory(category); // Guarda a categoria clicada
    setCurrentPage('support');    // Muda para a página de suporte
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage 
          onNavigateToCourses={navigateToCourses}
          onNavigateToSupport={navigateToSupport}
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />
      )}
      {currentPage === 'courses' && (
        <CoursesPage 
          onNavigateToHome={navigateToHome}
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />
      )}
      {currentPage === 'support' && (
        <SupportPage 
          category={supportCategory}
          onNavigateToHome={navigateToHome}
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterClick}
        />
      )}

      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} onSwitchToRegister={switchToRegister} />}
    </div>
  );
}

export default App;
