// src/pages/SupportPage.jsx

import React from 'react';
import './SupportPage.css';
import { FaArrowLeft, FaAngleDown } from 'react-icons/fa';

// Importa os componentes necessários
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import EstablishmentCard from '../components/EstablishmentCard/EstablishmentCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Dados de exemplo para os estabelecimentos
const mockEstablishments = {
  juridico: [
    { id: 1, name: 'Defensoria Pública', location: 'Centro, Teresina/PI', mapLink: '#' },
    { id: 2, name: 'Escritório de Advocacia Comunitária', location: 'Zona Leste, Teresina/PI', mapLink: '#' },
    { id: 3, name: 'Centro de Direitos Humanos', location: 'Zona Sul, Teresina/PI', mapLink: '#' },
  ],
  hospitales: [
    { id: 4, name: 'Hospital Getúlio Vargas', location: 'Centro, Teresina/PI', mapLink: '#' },
    { id: 5, name: 'Hospital de Urgência de Teresina', location: 'Zona Sudeste, Teresina/PI', mapLink: '#' },
    { id: 6, name: 'Maternidade Dona Evangelina Rosa', location: 'Centro, Teresina/PI', mapLink: '#' },
  ],
  // Adicione outras categorias aqui
};

function SupportPage({ category, onNavigateToHome, onLoginClick, onRegisterClick }) {
  // Pega a lista de estabelecimentos baseada na categoria, ou uma lista vazia se não encontrar
  const establishments = mockEstablishments[category] || [];
  
  // Transforma a primeira letra da categoria em maiúscula para o título
  const pageTitle = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <>
      <CoursesNavbar
        onNavigateToHome={onNavigateToHome}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        navLinkText="Setores" // O texto do link na navbar será "Setores"
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
