// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; 
import { FaCog, FaBars, FaTimes, FaAngleDown } from 'react-icons/fa';

// Dados para os menus dropdown
const courseCategories = [
  { name: 'Habilidades Digitales', filterKey: 'tecnologia' },
  { name: 'Validación y Cursos Técnicos', filterKey: 'educacao' },
  { name: 'Lenguajes para el Éxito', filterKey: 'linguagens' },
  { name: 'Gastronomía y Negocios', filterKey: 'culinaria' },
];

const supportCategories = [
  { name: 'Apoyo Jurídico', filterKey: 'juridico' },
  { name: 'Hospitales', filterKey: 'hospitales' },
  { name: 'Apoyo Social', filterKey: 'social' },
  { name: 'Guarderías', filterKey: 'guarderias' },
];

function Navbar({ 
  onNavigateToHome,
  onNavigateToCourses,
  onNavigateToSupport,
  onLoginClick, 
  onRegisterClick 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLoginClick = () => { setIsMenuOpen(false); onLoginClick(); };
  const handleRegisterClick = () => { setIsMenuOpen(false); onRegisterClick(); };
  
  const handleNavigate = (navigationFunc, category = null) => {
    setIsMenuOpen(false);
    navigationFunc(category);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a onClick={() => handleNavigate(onNavigateToHome)}>NOSSOLOGO</a>
        </div>

        <nav className="desktop-nav">
          <a onClick={() => handleNavigate(onNavigateToHome)}>Inicio</a>
          
          <div className="nav-item">
            <span className="nav-item-link">Cursos <FaAngleDown size={12} /></span>
            <ul className="dropdown-menu">
              {courseCategories.map(cat => (
                <li key={cat.filterKey} className="dropdown-item" onClick={() => handleNavigate(onNavigateToCourses, cat.filterKey)}>
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-item">
            <span className="nav-item-link">Apoyo <FaAngleDown size={12} /></span>
            <ul className="dropdown-menu">
              {supportCategories.map(cat => (
                <li key={cat.filterKey} className="dropdown-item" onClick={() => handleNavigate(onNavigateToSupport, cat.filterKey)}>
                  {cat.name}
                </li>
              ))}
            </ul>
          </div>

          <a onClick={() => { /* Ação futura */ }}>Sobre Nosotras</a>
        </nav>
        
        <div className="desktop-actions">
          <button className="nav-button secondary" onClick={onLoginClick}>Iniciar sesión</button>
          <button className="nav-button primary" onClick={onRegisterClick}>Crear cuenta</button>
          <a href="#" className="settings-icon"><FaCog size={28} /></a>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* O menu mobile permanece o mesmo por simplicidade, levando para as páginas principais */}
      <div className={isMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <a onClick={() => handleNavigate(onNavigateToHome)}>Inicio</a>
        <a onClick={() => handleNavigate(onNavigateToCourses, null)}>Cursos</a>
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
