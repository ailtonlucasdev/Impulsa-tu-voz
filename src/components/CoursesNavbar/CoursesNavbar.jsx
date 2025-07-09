// src/components/CoursesNavbar/CoursesNavbar.jsx
import React, { useState } from 'react';
import './CoursesNavbar.css'; 
import { FaCog, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';

// 1. O componente agora aceita uma nova prop 'navLinkText' com um valor padrão
function CoursesNavbar({ onNavigateToHome, onLoginClick, onRegisterClick, navLinkText = "Aprendizado" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => { setIsMenuOpen(false); onLoginClick(); };
  const handleRegisterClick = () => { setIsMenuOpen(false); onRegisterClick(); };
  const handleNavigateHome = () => { setIsMenuOpen(false); onNavigateToHome(); };
  
  return (
    <header className="courses-navbar-container">
      <div className="courses-navbar-content">
        <div className="navbar-logo">
          <a href="#" onClick={handleNavigateHome}>NOSSOLOGO</a>
        </div>
        <nav className="desktop-nav">
          <a href="#" onClick={handleNavigateHome}>Página Inicial</a>
          {/* 2. O texto do link agora vem da prop */}
          <a href="#" className="has-dropdown">{navLinkText} <FaAngleDown /></a>
        </nav>
        <div className="desktop-actions">
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={onRegisterClick}>Registrar-se</button>
          <a href="/configuracoes" className="settings-icon"><FaCog size={28} /></a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
      <div className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <a href="#" onClick={handleNavigateHome}>Página Inicial</a>
        <a href="#" onClick={() => setIsMenuOpen(false)}>{navLinkText}</a>
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
