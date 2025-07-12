// src/pages/SettingsPage.jsx

import React from 'react';
import './SettingsPage.css';

import Navbar from '../components/Navbar/Navbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Página de Configurações em branco
function SettingsPage(props) {
  return (
    <>
      <Navbar {...props} />
      <main className="settings-page-main">
        <h1>Configuraciones</h1>
        <p>Esta página estará disponible próximamente.</p>
      </main>
      <Footer />
    </>
  );
}

export default SettingsPage;
