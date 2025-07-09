// src/pages/SupportPage.jsx
import React from 'react';
// CORREÇÃO: A importação agora aponta para o seu próprio ficheiro CSS.
import './SupportPage.css';

// Reutilizamos a navbar da página de cursos
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';

// Dados de exemplo para os estabelecimentos
const mockEstablishments = [
  { name: 'Estabelecimento 1', address: 'Cidade/Estado' },
  { name: 'Estabelecimento 2', address: 'Cidade/Estado' },
  { name: 'Estabelecimento 3', address: 'Cidade/Estado' },
];

// A página recebe a categoria selecionada e a função para voltar
function SupportPage({ category, onNavigateToHome, onLoginClick, onRegisterClick }) {
  // Transforma a chave do filtro num título legível
  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Suporte';

  return (
    <>
      {/* Usamos a CoursesNavbar, passando o texto "Setores" */}
      <CoursesNavbar 
        navLinkText="Setores"
        onNavigateToHome={onNavigateToHome}
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
      />
      <main className="support-page-main">
        <div className="support-page-header">
          <button onClick={onNavigateToHome} className="back-button">
            <FaArrowLeft /> Retornar
          </button>
          <h2>Setor/área: {pageTitle}</h2>
        </div>

        <div className="map-container">
          <div className="map-placeholder">
            <p>Localização atual</p>
            <FaMapMarkerAlt className="map-pin-icon" />
          </div>
          <p className="map-command">Comando para navegar no mapa</p>
        </div>

        <div className="establishments-container">
          <div className="establishments-header">
            <label htmlFor="distance-filter">Ver estabelecimentos próximos até:</label>
            <select id="distance-filter">
              <option>10 km</option>
              <option>25 km</option>
              <option>50 km</option>
            </select>
          </div>
          <div className="establishments-grid">
            {mockEstablishments.map((est, index) => (
              <div className="establishment-card" key={index}>
                <div className="establishment-image-placeholder"></div>
                <div className="establishment-info">
                  <h4>{est.name}</h4>
                  <p>{est.address}</p>
                  <a href="#">Ver no mapa</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SupportPage;
