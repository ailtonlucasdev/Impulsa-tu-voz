// src/pages/CoursesPage.jsx
import React from 'react';

// Importe os componentes necessários para esta página
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Dados de exemplo, que viriam de uma API no futuro
const allCourses = [
  { id: 1, title: 'Curso de Culinária Básica', rating: '4.8' },
  { id: 2, title: 'Introdução à Programação', rating: '4.9' },
  { id: 3, title: 'Português para Estrangeiros', rating: '4.7' },
  { id: 4, title: 'Gestão de Pequenos Negócios', rating: '4.8' },
  { id: 5, title: 'Design Gráfico para Redes Sociais', rating: '4.6' },
  { id: 6, title: 'Empreendedorismo Digital', rating: '5.0' },
  // ... adicione mais 10 ou 15 cursos
];

function CoursesPage({ onLoginClick, onRegisterClick }) {
  return (
    <>
      <CoursesNavbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <h1>Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Filters />
        <div className="courses-grid-fullpage">
          {allCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}