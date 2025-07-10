// src/pages/SupportPage.jsx

// src/pages/SupportPage.jsx

import React from 'react';

// Importa os componentes necessários para a página
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';

// A página recebe as props do App.jsx
function SupportPage({ category, onNavigateToHome, onLoginClick, onRegisterClick }) {
  return (
    <>
      <CoursesNavbar
        onNavigateToHome={onNavigateToHome}
        onLoginClick={onLoginClick}
        onRegisterClick={onRegisterClick}
        navLinkText="Suporte" // Texto customizado para a navbar nesta página
      />
      <main style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', padding: '2rem' }}>
        <h1>Página de Suporte</h1>
        {/* Mostra a categoria que foi clicada na página anterior */}
        {category ? (
          <p>Você selecionou a categoria de suporte: <strong>{category}</strong>.</p>
        ) : (
          <p>Bem-vindo à nossa central de suporte.</p>
        )}
        {/* Aqui você poderia adicionar mais conteúdo específico da página de suporte */}
      </main>
      <Footer />
    </>
  );
}

export default SupportPage;