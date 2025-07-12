// src/components/Navbar/Navbar.jsx

import React, { useState } from 'react';
import './Navbar.css'; 
// Importa os novos ícones
import { FaCog, FaBars, FaTimes, FaAngleDown, FaGlobe, FaBell } from 'react-icons/fa';

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

// Componente da Navbar atualizado
function Navbar({ 
  onNavigateToHome,
  onNavigateToCourses,
  onNavigateToSupport,
  onNavigateToSettings, // Recebe a nova função
  onLoginClick, 
  onRegisterClick 
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Novo estado para o menu de notificações
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleNotifications = () => setIsNotificationsOpen(!isNotificationsOpen);

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
          
          {/* NOVO: Container para os ícones de utilidade */}
          <div className="navbar-user-actions">
            <div className="action-icon">
              <FaGlobe />
            </div>
            <div className="action-icon" onClick={toggleNotifications}>
              <FaBell />
              {/* Menu de Notificações */}
              {isNotificationsOpen && <NotificationsMenu />}
            </div>
            <div className="action-icon" onClick={() => handleNavigate(onNavigateToSettings)}>
              <FaCog />
            </div>
          </div>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

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

// NOVO: Componente para o menu de notificações
function NotificationsMenu() {
  const [filter, setFilter] = useState('all'); // 'all', 'read', 'unread'
  // Mock de notificações
  const notifications = [
    { id: 1, text: 'Tu curso "Portugués para el Día a Día" comienza mañana.', time: 'hace 5 min', read: false },
    { id: 2, text: '¡Bienvenida a Impulsa Tu Voz! Completa tu perfil.', time: 'hace 1 día', read: true },
  ];

  const filteredNotifications = notifications.filter(n => {
    if (filter === 'read') return n.read;
    if (filter === 'unread') return !n.read;
    return true;
  });

  return (
    <div className="notifications-dropdown">
      <div className="notifications-header">
        <h4>Notificaciones</h4>
        <div className="notifications-filter">
          <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todas</button>
          <button onClick={() => setFilter('unread')} className={filter === 'unread' ? 'active' : ''}>No leídas</button>
        </div>
      </div>
      <ul className="notifications-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(n => (
            <li key={n.id} className={`notification-item ${!n.read ? 'unread' : ''}`}>
              <p>{n.text}</p>
              <span>{n.time}</span>
            </li>
          ))
        ) : (
          <div className="notifications-empty">
            <p>No hay notificaciones.</p>
          </div>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
