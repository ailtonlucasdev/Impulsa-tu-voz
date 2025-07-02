import React from 'react';
import './navbar.css'; // Importa nosso arquivo de estilos
import { FaCog } from 'react-icons/fa'; // Importa o ícone de engrenagem

function Navbar() {
  return (
    <header className="navbar-container">

      {/* Logo à Esquerda */}
      <div className="navbar-logo">
        <a href="/">NOSSOLOGO</a>
      </div>

      {/* Links de navegação no Centro */}
      <nav className="navbar-links">
        <a href="/lugares">Lugares</a>
        <a href="/cursos">Cursos</a>
        <a href="/sobre">Sobre</a>
        <a href="/contatos">Contatos</a>
      </nav>

      {/* CTA e preferências à Direita */}
      <div className="navbar-actions">
        <button className="login-button">Iniciar sesión</button>
        <a href="/configuracoes" className="settings-icon">
          <FaCog size={28} /> {/* Usando o componente do ícone */}
        </a>
      </div>

    </header>
  );
}

export default Navbar;