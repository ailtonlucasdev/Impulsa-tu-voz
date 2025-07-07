// src/pages/HomePage.jsx
import React from 'react';

// ESTE COMPONENTE NÃO IMPORTA MAIS NADA. É TOTALMENTE ISOLADO.

// A página ainda recebe as props, mas não as usa por enquanto.
function HomePage({ onNavigateToCourses, onLoginClick, onRegisterClick }) {
  return (
    <div style={{ padding: '4rem', textAlign: 'center', fontSize: '1.5rem' }}>
      <h1>Teste da HomePage</h1>
      <p>Se você está a ver isto, a estrutura de páginas e o App.jsx estão a funcionar corretamente.</p>
      <p>O erro está dentro de um dos componentes que foram removidos (provavelmente a Navbar).</p>
      <button 
        style={{ padding: '1rem 2rem', marginTop: '1rem' }} 
        onClick={() => onNavigateToCourses('test')}
      >
        Clique para testar a navegação para Cursos
      </button>
    </div>
  );
}

export default HomePage;