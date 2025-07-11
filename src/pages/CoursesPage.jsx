// src/pages/CoursesPage.jsx

import React from 'react';
import './CoursesPage.css';

// Importa a Navbar unificada (não mais a CoursesNavbar)
import Navbar from '../components/Navbar/Navbar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

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

// A página passa todas as funções de navegação para a Navbar
function CoursesPage({ onNavigateToHome, onNavigateToCourses, onNavigateToSupport, onLoginClick, onRegisterClick }) {
  return (
    <>
      <Navbar 
        onNavigateToHome={onNavigateToHome}
        onNavigateToCourses={onNavigateToCourses}
        onNavigateToSupport={onNavigateToSupport}
        onLoginClick={onLoginClick} 
        onRegisterClick={onRegisterClick} 
      />
      <main style={{paddingTop: '80px'}}>
        <Filters />
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          <h1>Nossos Cursos</h1>
          <p>Encontre a capacitação ideal para o seu próximo passo profissional.</p>
          <div className="courses-page-grid">
            {allCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
