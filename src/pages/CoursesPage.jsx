// src/pages/CoursesPage.jsx

import React, { useState, useEffect } from 'react';
import './CoursesPage.css';

import Navbar from '../components/Navbar/Navbar.jsx';
import Filters from '../components/Filters/Filters.jsx';
import CourseCard from '../components/CourseCard/CourseCard.jsx';
import Footer from '../components/Footer/Footer.jsx';

// Banco de dados de cursos com novas propriedades (level, duration)
const allCourses = [
  { id: 1, title: 'Informática Básica para el Trabajo', rating: '4.7', category: 'tecnologia', level: 'basico', duration: 'medio' },
  { id: 2, title: 'Manejo de Redes Sociales para Negocios', rating: '4.9', category: 'tecnologia', level: 'intermediario', duration: 'curto' },
  { id: 3, title: 'Creación de Contenido con Canva', rating: '4.8', category: 'tecnologia', level: 'basico', duration: 'curto' },
  { id: 4, title: 'Cómo Validar tu Diploma en Brasil', rating: '4.9', category: 'educacao', level: 'basico', duration: 'curto' },
  { id: 5, title: 'Auxiliar Administrativo', rating: '4.7', category: 'educacao', level: 'intermediario', duration: 'medio' },
  { id: 6, title: 'Atención al Cliente', rating: '4.8', category: 'educacao', level: 'basico', duration: 'curto' },
  { id: 7, title: 'Portugués para el Día a Día', rating: '4.8', category: 'linguagens', level: 'basico', duration: 'medio' },
  { id: 8, title: 'Portugués para Entrevistas de Trabajo', rating: '4.9', category: 'linguagens', level: 'intermediario', duration: 'medio' },
  { id: 9, title: 'Higiene y Manipulación de Alimentos', rating: '5.0', category: 'culinaria', level: 'basico', duration: 'curto' },
  { id: 10, title: 'Prepara y Vende Dulces Brasileños', rating: '4.8', category: 'culinaria', level: 'intermediario', duration: 'medio' },
  { id: 11, title: 'Bases de la Cocina Venezolana para Emprender', rating: '4.9', category: 'culinaria', level: 'intermediario', duration: 'medio' },
];

const categoryNames = {
  tecnologia: 'Habilidades Digitales',
  educacao: 'Validación y Cursos Técnicos',
  linguagens: 'Lenguajes para el Éxito',
  culinaria: 'Gastronomía y Negocios',
};

function CoursesPage({ category, onNavigateToHome, onNavigateToCourses, onNavigateToSupport, onLoginClick, onRegisterClick }) {
  
  // Estado para todos os filtros
  const [filters, setFilters] = useState({
    category: category || 'all',
    level: 'all',
    duration: 'all',
    searchTerm: ''
  });

  // Atualiza o filtro de categoria se ele mudar via navbar
  useEffect(() => {
    setFilters(prevFilters => ({ ...prevFilters, category: category || 'all' }));
  }, [category]);

  // Lógica de filtragem
  const filteredCourses = allCourses.filter(course => {
    const categoryMatch = filters.category === 'all' || course.category === filters.category;
    const levelMatch = filters.level === 'all' || course.level === filters.level;
    const durationMatch = filters.duration === 'all' || course.duration === filters.duration;
    const searchMatch = course.title.toLowerCase().includes(filters.searchTerm.toLowerCase());
    return categoryMatch && levelMatch && durationMatch && searchMatch;
  });
  
  const pageTitle = filters.category !== 'all' ? categoryNames[filters.category] : 'Todos Nuestros Cursos';

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
        <Filters setFilters={setFilters} />
        <div className="courses-page-grid-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '2rem' }}>
          <h1>{pageTitle}</h1>
          
          <div className="courses-page-grid">
            {filteredCourses.length > 0 ? (
              filteredCourses.map(course => (
                <CourseCard key={course.id} course={course} />
              ))
            ) : (
              <p>No se encontraron cursos con los filtros seleccionados.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default CoursesPage;
