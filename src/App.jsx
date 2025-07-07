// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// Importa as PÁGINAS
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';

// Importa os MODAIS
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  
  const switchToRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  const navigateToCourses = () => {
    setCurrentPage('courses');
  };

  return (
    <div className="App">
      {currentPage === 'home' && (
        <HomePage 
          onNavigateToCourses={navigateToCourses}
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />
      )}
      {currentPage === 'courses' && (
        <CoursesPage 
          onLoginClick={openLoginModal}
          onRegisterClick={openRegisterModal}
        />
      )}

      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} onSwitchToRegister={switchToRegister} />}
    </div>
  );
}

export default App;
