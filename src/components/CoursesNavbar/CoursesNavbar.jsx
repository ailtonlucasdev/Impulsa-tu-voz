// src/components/CoursesNavbar/CoursesNavbar.jsx

import React, { useState } from 'react';
import './CoursesNavbar.css'; 
import { FaCog, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';

// Recebe as props para abrir os modais
function CoursesNavbar({ onLoginClick, onRegisterClick }) {
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

  return (
    // Usamos uma classe principal diferente para evitar conflitos de estilo
    <header className="courses-navbar-container">
      <div className="courses-navbar-content">
        <div className="navbar-logo">
          <a href="/">NOSSOLOGO</a>
        </div>

        {/* --- Itens visíveis APENAS no DESKTOP --- */}
        <nav className="desktop-nav">
          <a href="#">Página Inicial</a>
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
        <a href="#" onClick={() => setIsMenuOpen(false)}>Página Inicial</a>
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
