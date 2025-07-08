// src/components/CoursesNavbar/CoursesNavbar.jsx

import React, { useState } from 'react';
import './CoursesNavbar.css'; 
import { FaCog, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';

// 1. Receba a nova prop 'onNavigateToHome'
function CoursesNavbar({ onNavigateToHome, onLoginClick, onRegisterClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => {
    setIsMenuOpen(false);
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setIsMenuOpen(false);
    onRegisterClick();
  };
  
  // 2. Crie uma função para garantir que o menu fecha antes de navegar
  const handleNavigateHome = () => {
    setIsMenuOpen(false);
    onNavigateToHome();
  }

  return (
    <header className="courses-navbar-container">
      <div className="courses-navbar-content">
        <div className="navbar-logo">
          {/* 3. Use a nova função no onClick do logo */}
          <a href="#" onClick={handleNavigateHome}>NOSSOLOGO</a>
        </div>

        {/* --- Itens visíveis APENAS no DESKTOP --- */}
        <nav className="desktop-nav">
          {/* 4. Use a nova função no onClick do link */}
          <a href="#" onClick={handleNavigateHome}>Página Inicial</a>
          <a href="#" className="has-dropdown">Aprendizado <FaAngleDown /></a>
        </nav>
        <div className="desktop-actions">
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={onRegisterClick}>Registrar-se</button>
          <a href="/configuracoes" className="settings-icon">
            <FaCog size={28} />
          </a>
        </div>

        {/* --- Ícone do menu hambúrguer (visível APENAS no MOBILE) --- */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* --- Menu overlay (visível APENAS no MOBILE quando ativo) --- */}
      <div className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        {/* 5. Use a nova função no onClick do link do menu mobile */}
        <a href="#" onClick={handleNavigateHome}>Página Inicial</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>Aprendizado</a>
        <hr className="mobile-menu-divider" />
        <div className="mobile-buttons-wrapper">
          <button className="nav-button secondary" onClick={handleLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={handleRegisterClick}>Registrar-se</button>
        </div>
      </div>
    </header>
  );
}

export default CoursesNavbar;
