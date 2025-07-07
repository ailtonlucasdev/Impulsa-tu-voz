// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; 
import { FaCog, FaBars, FaTimes } from 'react-icons/fa';

function Navbar({ onLoginClick, onRegisterClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Funções para garantir que o menu fecha antes de abrir o modal
  const handleLoginClick = () => {
    setIsMenuOpen(false);
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setIsMenuOpen(false);
    onRegisterClick();
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/">NOSSOLOGO</a>
        </div>

        {/* --- Itens visíveis APENAS no DESKTOP --- */}
        <nav className="desktop-nav">
          <a href="/lugares">Areas</a>
          <a href="/cursos">Cursos</a>
          <a href="/sobre">Suporte</a>
          <a href="/contatos">Sobre</a>
        </nav>
        <div className="desktop-actions">
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={onRegisterClick}>Registra-te</button>
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
        <a href="/lugares" onClick={() => setIsMenuOpen(false)}>Areas</a>
        <a href="/cursos" onClick={() => setIsMenuOpen(false)}>Cursos</a>
        <a href="/sobre" onClick={() => setIsMenuOpen(false)}>Suporte</a>
        <a href="/contatos" onClick={() => setIsMenuOpen(false)}>Sobre</a>
        <hr className="mobile-menu-divider" />
        <div className="mobile-buttons-wrapper">
          <button className="nav-button secondary" onClick={handleLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={handleRegisterClick}>Registra-te</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
