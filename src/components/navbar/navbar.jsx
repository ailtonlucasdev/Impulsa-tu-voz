import React, { useState } from 'react';
import './navbar.css'; 
import { FaCog, FaBars, FaTimes } from 'react-icons/fa'; // importando icones

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Função para fechar o menu ao clicar em um link (útil no mobile)
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>NOSSOLOGO</a>
        </div>

        {/* O menu de navegação que se adapta */}
        <nav className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
          <a href="/lugares" onClick={closeMenu}>Lugares</a>
          <a href="/cursos" onClick={closeMenu}>Cursos</a>
          <a href="/sobre" onClick={closeMenu}>Sobre</a>
          <a href="/contatos" onClick={closeMenu}>Contatos</a>
          <a href="/login" className="login-button-mobile" onClick={closeMenu}>Iniciar sesión</a>
        </nav>

        {/* Ações da versão desktop */}
        <div className="navbar-actions">
          <button className="login-button">Iniciar sesión</button>
          <a href="/configuracoes" className="settings-icon">
            <FaCog size={28} />
          </a>
        </div>
        
        {/* Ícone de menu para mobile */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;