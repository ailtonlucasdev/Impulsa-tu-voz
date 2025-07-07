// src/components/CoursesNavbar/CoursesNavbar.jsx
import React from 'react';
import './CoursesNavbar.css'; // Usaremos um CSS separado
import { FaCog, FaAngleDown } from 'react-icons/fa';

// Recebe props para abrir os modais
function CoursesNavbar({ onLoginClick, onRegisterClick }) {
  return (
    <header className="courses-navbar-container">
      <div className="courses-navbar-content">
        <div className="navbar-logo">
          <a href="/">NOSSOLOGO</a>
        </div>
        <nav className="courses-nav-links">
          <a href="#">Página Inicial</a>
          <a href="#" className="has-dropdown">Aprendizado <FaAngleDown /></a>
        </nav>
        <div className="navbar-actions">
          <button className="nav-button primary" onClick={onRegisterClick}>Registrar-se</button>
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <a href="/configuracoes" className="settings-icon">
            <FaCog size={28} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default CoursesNavbar;