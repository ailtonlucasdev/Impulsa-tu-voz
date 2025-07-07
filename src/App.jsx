// src/App.jsx
import React, { useState } from 'react';
import './App.css';

// 1. Vamos importar APENAS as duas páginas de teste.
import HomePage from './pages/HomePage.jsx';
import CoursesPage from './pages/CoursesPage.jsx';

// Os modais e outros componentes estão comentados para isolar o erro.
// import RegisterModal from './components/RegisterModal/RegisterModal.jsx';
// import LoginModal from './components/LoginModal/LoginModal.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToCourses = () => {
    console.log('Botão clicado, a mudar para a página de cursos...');
    setCurrentPage('courses');
  };

  return (
    <div className="App">
      {/* Renderização condicional baseada no estado 'currentPage' */}
      {currentPage === 'home' && (
        <HomePage 
          onNavigateToCourses={navigateToCourses}
        />
      )}

      {currentPage === 'courses' && (
        <CoursesPage />
      )}
    </div>
  );
}

export default App;
