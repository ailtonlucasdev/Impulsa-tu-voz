import React, { useState } from 'react';
import './Navbar.css'; 
import { FaCog, FaBars, FaTimes } from 'react-icons/fa';

// 1. Adicione { onLoginClick } como um parâmetro para receber a função
function Navbar({ onLoginClick }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  // Função para lidar com o clique no botão de login,
  // que fecha o menu mobile e abre o modal.
  const handleLoginClick = () => {
    closeMenu(); // Fecha o menu mobile, se estiver aberto
    onLoginClick(); // Chama a função para abrir o modal
  };

  return (
    <header className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>NOSSOLOGO</a>
        </div>

        <nav className={isMenuOpen ? 'navbar-links active' : 'navbar-links'}>
          <a href="/lugares" onClick={closeMenu}>Areas</a>
          <a href="/cursos" onClick={closeMenu}>Cursos</a>
          <a href="/sobre" onClick={closeMenu}>Suporte</a>
          <a href="/contatos" onClick={closeMenu}>Sobre</a>
          {/* 3. Use a nova função aqui para o botão mobile */}
          <a href="#" className="login-button-mobile" onClick={handleLoginClick}>Iniciar sesión</a>
          <a href="#" className="login-button-mobile" onClick={handleLoginClick}>Registra-se</a>
        </nav>
        

        <div className="navbar-actions">
          {/* 2. Adicione o onClick aqui para o botão desktop */}
          <button className="login-button" onClick={onLoginClick}>Iniciar sesión</button>
          <a href="/configuracoes" className="settings-icon">
          
          </a>
          <button className="login-button" onClick={onLoginClick}>Registrar-se</button>
          <a href="/configuracoes" className="settings-icon">
            <FaCog size={28} /> {/* icone de configurações */}
          </a>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
