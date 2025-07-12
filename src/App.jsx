// src/App.jsx

import React, { useState, useEffect } from 'react';
import './App.css';

import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';
import SupportPage from './pages/SupportPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx'; // Importa a nova página
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [supportCategory, setSupportCategory] = useState(null);
  const [courseCategory, setCourseCategory] = useState(null);

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

  const navigateToHome = () => setCurrentPage('home');
  const navigateToCourses = (category) => {
    setCourseCategory(category);
    setCurrentPage('courses');
  };
  const navigateToSupport = (category) => {
    setSupportCategory(category);
    setCurrentPage('support');
  };
  // Nova função de navegação para as configurações
  const navigateToSettings = () => setCurrentPage('settings');

  const renderPage = () => {
    const navProps = {
      onNavigateToHome: navigateToHome,
      onNavigateToCourses: navigateToCourses,
      onNavigateToSupport: navigateToSupport,
      onNavigateToSettings: navigateToSettings, // Passa a nova função
      onLoginClick: openLoginModal,
      onRegisterClick: openRegisterModal,
    };

    switch (currentPage) {
      case 'courses':
        return <CoursesPage {...navProps} category={courseCategory} />;
      case 'support':
        return <SupportPage {...navProps} category={supportCategory} />;
      case 'settings': // Adiciona o case para a nova página
        return <SettingsPage {...navProps} />;
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
