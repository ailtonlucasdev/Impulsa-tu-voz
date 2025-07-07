// src/pages/CoursesPage.jsx
import React from 'react';

// 1. Reintroduzimos todos os componentes.
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Filters from '../components/Filters/Filters.jsx';
// 2. Descomentamos a importação do CourseCard.
import CourseCard from '../components/CourseCard/CourseCard.jsx';


// Dados de exemplo
const allCourses = [
  { id: 1, title: 'Curso de Culinária Básica', rating: '4.8' },
  { id: 2, title: 'Introdução à Programação', rating: '4.9' },
  { id: 3, title: 'Português para Estrangeiros', rating: '4.7' },
  { id: 4, title: 'Gestão de Pequenos Negócios', rating: '4.8' },
];

function CoursesPage({ onLoginClick, onRegisterClick }) {
  return (
    <>
      <CoursesNavbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main>
        <div style={{ padding: '2rem' }}>
          <h1>Página de Cursos</h1>
          <p>Se você está a ver os cards abaixo, o erro foi resolvido!</p>
        </div>
        
        <Filters />
        
        {/* 3. Descomentamos a lógica que renderiza os cards. */}
        <div className="courses-grid-fullpage" style={{ padding: '2rem' }}>
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
