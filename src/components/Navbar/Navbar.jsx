// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; 
import { FaCog, FaBars, FaTimes } from 'react-icons/fa';

// A Navbar agora recebe todas as funções de navegação
function Navbar({ 
  onNavigateToHome,
  onNavigateToCourses,
  onNavigateToSupport,
  onLoginClick, 
  onRegisterClick 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Funções para garantir que o menu fecha antes de qualquer ação
  const handleLoginClick = () => {
    setIsMenuOpen(false);
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setIsMenuOpen(false);
    onRegisterClick();
  };
  
  // Funções para navegação, que também fecham o menu mobile
  const handleNavigate = (navigationFunc, category = null) => {
    setIsMenuOpen(false);
    if (category) {
      navigationFunc(category);
    } else {
      navigationFunc();
    }
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a onClick={() => handleNavigate(onNavigateToHome)}>NOSSOLOGO</a>
        </div>

        <nav className="desktop-nav">
          <a onClick={() => handleNavigate(onNavigateToHome)}>Inicio</a>
          <a onClick={() => handleNavigate(onNavigateToCourses)}>Cursos</a>
          {/* Para 'Apoyo', passamos a categoria padrão 'juridico' para abrir a página */}
          <a onClick={() => handleNavigate(onNavigateToSupport, 'juridico')}>Apoyo</a>
          <a onClick={() => { /* Ação para 'Sobre Nosotras' virá no futuro */ }}>Sobre Nosotras</a>
        </nav>
        
        <div className="desktop-actions">
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={onRegisterClick}>Crear cuenta</button>
          <a href="#" className="settings-icon">
            <FaCog size={28} />
          </a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      <div className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <a onClick={() => handleNavigate(onNavigateToHome)}>Inicio</a>
        <a onClick={() => handleNavigate(onNavigateToCourses)}>Cursos</a>
        <a onClick={() => handleNavigate(onNavigateToSupport, 'juridico')}>Apoyo</a>
        <a onClick={() => { /* Ação futura */ }}>Sobre Nosotras</a>
        <hr className="mobile-menu-divider" />
        <div className="mobile-buttons-wrapper">
          <button className="nav-button secondary" onClick={handleLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={handleRegisterClick}>Crear cuenta</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
