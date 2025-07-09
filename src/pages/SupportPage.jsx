// src/pages/SupportPage.jsx
import React from 'react';
// A importação do CSS será comentada temporariamente para isolar o problema.
import './SupportPage.css';

// As importações dos componentes também serão comentadas para o teste.
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
// import { FaArrowLeft, FaMapMarkerAlt } from 'react-icons/fa';

// A página ainda recebe as props para que o App.jsx não dê erro.
function SupportPage({ category, onNavigateToHome, onLoginClick, onRegisterClick }) {
  
  // Apenas para o teste, mostramos a categoria recebida.
  const pageTitle = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Suporte';

  return (
    // Renderizamos apenas um texto simples para garantir que a página carrega.
    <>
      <CoursesNavbar 
        onNavigateToHome={onNavigateToHome}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        navLinkText="Setores"
      />
      <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.5rem' }}>
        <h1>Página de Suporte (Depuração)</h1>
        <p>Se você está a ver isto, a navegação para a SupportPage funcionou.</p>
        <p>O erro está num dos componentes que foram comentados neste ficheiro.</p>
        <h2>Categoria recebida: {pageTitle}</h2>
      </div>
      <Footer />
    </>
  );
}

export default SupportPage;
