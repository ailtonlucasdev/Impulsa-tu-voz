// src/pages/CoursesPage.jsx

import React from 'react';
import './CoursesPage.css';

// Importa os componentes necessários para esta página
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Dados de exemplo
const allCourses = [
  { id: 1, title: 'Curso de Culinária Básica', rating: '4.8' },
  { id: 2, title: 'Introdução à Programação', rating: '4.9' },
  { id: 3, title: 'Português para Estrangeiros', rating: '4.7' },
  { id: 4, title: 'Gestão de Pequenos Negócios', rating: '4.8' },
  { id: 5, title: 'Design Gráfico para Redes Sociais', rating: '4.6' },
  { id: 6, title: 'Empreendedorismo Digital', rating: '5.0' },
  { id: 7, title: 'Artesanato Criativo', rating: '4.7' },
  { id: 8, title: 'Marketing para Iniciantes', rating: '4.8' },
];

// 1. Receba a nova prop 'onNavigateToHome' vinda do App.jsx
function CoursesPage({ onNavigateToHome, onLoginClick, onRegisterClick }) {
  return (
    <>
      {/* 2. Passe a prop para a CoursesNavbar */}
      <CoursesNavbar 
        onNavigateToHome={onNavigateToHome} 
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
      />
      <main>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
        </div>
        <Filters />
          <h1>Nossos Cursos</h1>
          <p>Encontre a capacitação ideal para o seu próximo passo profissional.</p>
        <div className="courses-page-grid">
          {allCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
