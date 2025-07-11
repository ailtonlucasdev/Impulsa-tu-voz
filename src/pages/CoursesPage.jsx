// src/pages/CoursesPage.jsx

import React from 'react';
import './CoursesPage.css';

import Navbar from '../components/Navbar/Navbar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Banco de dados de cursos expandido e categorizado
const allCourses = [
  // Tecnologia
  { id: 1, title: 'Informática Básica para el Trabajo', rating: '4.7', category: 'tecnologia' },
  { id: 2, title: 'Manejo de Redes Sociales para Negocios', rating: '4.9', category: 'tecnologia' },
  { id: 3, title: 'Creación de Contenido con Canva', rating: '4.8', category: 'tecnologia' },
  // Educação
  { id: 4, title: 'Cómo Validar tu Diploma en Brasil', rating: '4.9', category: 'educacao' },
  { id: 5, title: 'Auxiliar Administrativo', rating: '4.7', category: 'educacao' },
  { id: 6, title: 'Atención al Cliente', rating: '4.8', category: 'educacao' },
  // Linguagens
  { id: 7, title: 'Portugués para el Día a Día', rating: '4.8', category: 'linguagens' },
  { id: 8, title: 'Portugués para Entrevistas de Trabajo', rating: '4.9', category: 'linguagens' },
  // Gastronomia
  { id: 9, title: 'Higiene y Manipulación de Alimentos', rating: '5.0', category: 'culinaria' },
  { id: 10, title: 'Prepara y Vende Dulces Brasileños', rating: '4.8', category: 'culinaria' },
  { id: 11, title: 'Bases de la Cocina Venezolana para Emprender', rating: '4.9', category: 'culinaria' },
];

const categoryNames = {
  tecnologia: 'Habilidades Digitales',
  educacao: 'Validación y Cursos Técnicos',
  linguagens: 'Lenguajes para el Éxito',
  culinaria: 'Gastronomía y Negocios',
};

// A página agora recebe a prop 'category'
function CoursesPage({ category, onNavigateToHome, onNavigateToCourses, onNavigateToSupport, onLoginClick, onRegisterClick }) {
  
  // Filtra os cursos se uma categoria foi passada, senão, mostra todos
  const displayedCourses = category ? allCourses.filter(course => course.category === category) : allCourses;
  
  // Define o título da página dinamicamente
  const pageTitle = category ? categoryNames[category] : 'Todos Nuestros Cursos';
  const pageSubtitle = category 
    ? `Encuentra la capacitación ideal en ${categoryNames[category]}.`
    : 'Encuentra la capacitación ideal para tu próximo paso profesional.';

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
        <div className="courses-page-grid-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          <h1>{pageTitle}</h1>
          <p>{pageSubtitle}</p>
          <div className="courses-page-grid">
            {displayedCourses.length > 0 ? (
              displayedCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p>No hay cursos disponibles en esta categoría por el momento.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
