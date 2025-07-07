// src/pages/CoursesPage.jsx
import React from 'react';

// 1. Vamos reintroduzir os componentes um a um. Começamos com a Navbar e o Footer.
import CoursesNavbar from '../components/CoursesNavbar/CoursesNavbar.jsx';
import Footer from '../components/Footer/Footer.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';


// Dados de exemplo que podemos usar mais tarde
const allCourses = [
  { id: 1, title: 'Curso de Culinária Básica', rating: '4.8' },
  { id: 2, title: 'Introdução à Programação', rating: '4.9' },
];

function CoursesPage({ onLoginClick, onRegisterClick }) {
  return (
    <>
      <CoursesNavbar onLoginClick={onLoginClick} onRegisterClick={onRegisterClick} />
      <main>
        <div style={{ padding: '2rem' }}>
          <h1>Página de Cursos (Teste)</h1>
          <p>Se você está a ver isto, a CoursesNavbar e o Footer foram carregados com sucesso.</p>
          <p>O próximo passo é descomentar o Filters.</p>
        </div>
        
        {/* Descomente os componentes abaixo, um de cada vez, para encontrar o erro. */}
        <Filters />
        
        <div className="courses-grid-fullpage" style={{ padding: '0 2rem' }}>
          {/* A lógica do .map() está comentada por agora */}
          {/* {allCourses.map(course => (
            // <CourseCard key={course.id} course={course} />
          ))} */}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
