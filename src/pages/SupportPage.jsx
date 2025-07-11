// src/pages/SupportPage.jsx

import React from 'react';
import './SupportPage.css';
import { FaArrowLeft, FaAngleDown } from 'react-icons/fa';

// Importa a Navbar unificada (não mais a CoursesNavbar)
import Navbar from '../components/Navbar/Navbar.jsx';
import EstablishmentCard from '../components/EstablishmentCard/EstablishmentCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

const mockEstablishments = {
  juridico: [
    { id: 1, name: 'Defensoria Pública', location: 'Centro, Teresina/PI', mapLink: '#' },
    { id: 2, name: 'Escritório de Advocacia Comunitária', location: 'Zona Leste, Teresina/PI', mapLink: '#' },
  ],
  hospitales: [
    { id: 4, name: 'Hospital Getúlio Vargas', location: 'Centro, Teresina/PI', mapLink: '#' },
  ],
};

// A página passa todas as funções de navegação para a Navbar
function SupportPage({ category, onNavigateToHome, onNavigateToCourses, onNavigateToSupport, onLoginClick, onRegisterClick }) {
  const establishments = mockEstablishments[category] || [];
  const pageTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <Navbar 
        onNavigateToHome={onNavigateToHome}
        onNavigateToCourses={onNavigateToCourses}
        onNavigateToSupport={onNavigateToSupport}
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
      />
      <main className="support-page-main">
        <div className="support-page-content">
          <button onClick={onNavigateToHome} className="return-button">
            <FaArrowLeft /> Retornar
          </button>
          
          <h1 className="support-page-title">{pageTitle}</h1>

          <div className="map-placeholder">
            <span>Localização atual</span>
            <div className="map-pin"></div>
            <p>Comando para navegar no mapa</p>
          </div>

          <section className="establishments-section">
            <div className="establishments-header">
              <label htmlFor="distance-filter">Ver estabelecimentos próximos até:</label>
              <div className="distance-dropdown">
                <span>XX km</span>
                <FaAngleDown />
              </div>
            </div>
            <div className="establishments-grid">
              {establishments.map(item => (
                <EstablishmentCard key={item.id} establishment={item} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SupportPage;
