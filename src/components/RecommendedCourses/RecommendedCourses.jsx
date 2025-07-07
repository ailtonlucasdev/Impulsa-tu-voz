// src/components/RecommendedCourses/RecommendedCourses.jsx
import React from 'react';
import './RecommendedCourses.css';
import CourseCard from '../CourseCard/CourseCard.jsx';

const mockCourses = [
  { id: 1, title: 'Curso habilidade de Culinária', rating: '4.8' },
  { id: 2, title: 'Curso habilidade de Tecnologia', rating: '4.9' },
  { id: 3, title: 'Curso habilidade de Linguagens', rating: '4.7' },
  { id: 4, title: 'Curso habilidade de Educação', rating: '4.8' },
  { id: 5, title: 'Curso habilidade de Negócios', rating: '4.6' },
  { id: 6, title: 'Curso habilidade de Design', rating: '4.9' },
  { id: 7, title: 'Curso habilidade de Empreendedorismo', rating: '5.0' },
  { id: 8, title: 'Curso habilidade de Artesanato', rating: '4.7' },
];

// 1. O componente agora recebe a prop 'onNavigate'
function RecommendedCourses({ onNavigate }) {
  return (
    <section className="courses-section">
      <h2 className="section-main-title">Cursos recomendados</h2>
      <div className="courses-wrapper">
        <p className="section-subtitle">Aprende algo nuevo que puede cambiar tu vida</p>
        <div className="courses-grid">
          {mockCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        {/* 2. O onClick do botão agora chama a função 'onNavigate' recebida */}
        <button className="show-all-button" onClick={onNavigate}>
          Mostrar todos los cursos
        </button>
      </div>
    </section>
  );
}

export default RecommendedCourses;
