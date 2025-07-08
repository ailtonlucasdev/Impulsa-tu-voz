// src/App.jsx
import React, { useState, useEffect } from 'react'; // 1. Importe o useEffect
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

  // 2. Este useEffect é executado sempre que 'currentPage' muda
  useEffect(() => {
    // Rola a janela para o topo (coordenadas x:0, y:0)
    window.scrollTo(0, 0);
  }, [currentPage]); // O array de dependências garante que isto só acontece quando a página muda

  const openRegisterModal = () => setIsRegisterModalOpen(true);
  const closeRegisterModal = () => setIsRegisterModalOpen(false);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);
  
  const switchToRegister = () => {
    closeLoginModal();
    openRegisterModal();
  };

  // Funções de navegação
  const navigateToCourses = () => setCurrentPage('courses');
  const navigateToHome = () => setCurrentPage('home'); // 3. Nova função para voltar à home

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
          onNavigateToHome={navigateToHome} // 4. Passe a nova função para a CoursesPage
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
