// src/pages/SettingsPage.jsx

import React, { useState } from 'react';
import './SettingsPage.css';
import { FaUser, FaBell, FaGlobe, FaUniversalAccess, FaTimes } from 'react-icons/fa';

import Navbara from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Subcomponente para a seção de perfil do usuário
const UserProfileSection = () => {
  // Mock de dados do usuário
  const userData = {
    name: 'Nome do Estudante',
    email: 'estudante.email@email.com',
    city: 'Teresina, PI',
    phone1: '(86) 99999-9999',
    phone2: '(86) 88888-8888',
    gender: 'Gênero do estudante',
  };

  return (
    <div className="user-profile-section">
      <h3>Usuário</h3>
      <div className="profile-photo-section">
        <div className="photo-placeholder">
          <FaUser size={30} color="#aaa" />
        </div>
        <div className="photo-actions">
          <button className="remove-btn">Remover foto</button>
          <button className="change-btn">Mudar foto</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="name">Nome</label>
        <div className="form-input-wrapper">
          <input type="text" id="name" value={userData.name} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="email">Email</label>
        <div className="form-input-wrapper">
          <input type="email" id="email" value={userData.email} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="password">Senha</label>
        <div className="form-input-wrapper">
          <input type="password" id="password" value="************" disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>
      
      <div className="form-row">
        <label htmlFor="city">Cidade</label>
        <div className="form-input-wrapper">
          <input type="text" id="city" value={userData.city} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="phone1">Telefone</label>
        <div className="form-input-wrapper">
          <input type="text" id="phone1" value={userData.phone1} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="gender">Gênero</label>
        <div className="form-input-wrapper">
          <input type="text" id="gender" value={userData.gender} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="phone2">Telefone</label>
        <div className="form-input-wrapper">
          <input type="text" id="phone2" value={userData.phone2} disabled />
          <button className="edit-button">Editar</button>
        </div>
      </div>

    </div>
  );
};

// Componente principal da página
function SettingsPage(props) {
  const [activeSection, setActiveSection] = useState('usuario');

  const renderSection = () => {
    switch (activeSection) {
      case 'usuario':
        return <UserProfileSection />;
      case 'notificacoes':
        return <h3>Notificações</h3>;
      case 'linguagem':
        return <h3>Linguagem</h3>;
      case 'acessibilidade':
        return <h3>Acessibilidade</h3>;
      default:
        return <UserProfileSection />;
    }
  };

  return (
    <>
      <Navbar {...props} />
      <div className="settings-page-container">
        <aside className="settings-sidebar">
          <h2>Preferências</h2>
          <ul className="settings-menu">
            <li 
              className={`settings-menu-item ${activeSection === 'usuario' ? 'active' : ''}`}
              onClick={() => setActiveSection('usuario')}
            >
              <FaUser /> Usuário
            </li>
            <li 
              className={`settings-menu-item ${activeSection === 'notificacoes' ? 'active' : ''}`}
              onClick={() => setActiveSection('notificacoes')}
            >
              <FaBell /> Notificações
            </li>
            <li 
              className={`settings-menu-item ${activeSection === 'linguagem' ? 'active' : ''}`}
              onClick={() => setActiveSection('linguagem')}
            >
              <FaGlobe /> Linguagem
            </li>
            <li 
              className={`settings-menu-item ${activeSection === 'acessibilidade' ? 'active' : ''}`}
              onClick={() => setActiveSection('acessibilidade')}
            >
              <FaUniversalAccess /> Acessibilidade
            </li>
          </ul>
        </aside>
        <main className="settings-content">
          {renderSection()}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default SettingsPage;
