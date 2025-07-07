// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// Importa as PÁGINAS, não mais os componentes individuais
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';

// Importa os modais, que podem ser abertos de qualquer página
import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  // Estado para controlar a página atual ('home' ou 'courses')
  const [currentPage, setCurrentPage] = useState('home');

  // Estados para os modais
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

  // Função para navegar para a página de cursos
  const navigateToCourses = (filter) => {
    // No futuro, você pode usar o 'filter' para já mostrar os cursos filtrados
    console.log('Navegando para a página de cursos...');
    setCurrentPage('courses');
  };

  return (
    <div className="App">
      {/* Renderização condicional da página */}
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

      {/* Os modais vivem aqui, fora das páginas, para poderem ser chamados de qualquer lugar */}
      {isRegisterModalOpen && <RegisterModal onClose={closeRegisterModal} />}
      {isLoginModalOpen && <LoginModal onClose={closeLoginModal} onSwitchToRegister={switchToRegister} />}
    </div>
  );
}

export default App;