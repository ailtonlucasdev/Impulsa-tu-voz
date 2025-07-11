// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [supportCategory, setSupportCategory] = useState(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

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

  // Funções de navegação unificadas
  const navigateToHome = () => setCurrentPage('home');
  const navigateToCourses = () => setCurrentPage('courses');
  const navigateToSupport = (category) => {
    setSupportCategory(category);
    setCurrentPage('support');
  };

  const renderPage = () => {
    const navProps = {
      onNavigateToHome: navigateToHome,
      onNavigateToCourses: navigateToCourses,
      onNavigateToSupport: navigateToSupport,
      onLoginClick: openLoginModal,
      onRegisterClick: openRegisterModal,
    };

    switch (currentPage) {
      case 'courses':
        return <CoursesPage {...navProps} />;
      case 'support':
        return <SupportPage {...navProps} category={supportCategory} />;
      case 'home':
      default:
        return <HomePage {...navProps} />;
    }
  };

  return (
    <div className="App">
      {renderPage()}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} onSwitchToRegister={switchToRegister} />}
    </div>
  );
}

export default App;
