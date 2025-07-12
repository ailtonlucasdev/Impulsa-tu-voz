// src/components/CourseCard/CourseCard.jsx

import React from 'react';
import './CourseCard.css';
import { FaStar } from 'react-icons/fa';

// Mapa para traduzir a chave de duração para texto
const durationMap = {
  curto: 'Até 1 mês',
  medio: '1-3 meses'
};

function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="card-image-placeholder">
        {/* Este é o placeholder para a imagem do curso */}
      </div>
      <div className="card-content">
        {/* NOVO: Container para alinhar título e duração */}
        <div className="card-title-row">
          <h3 className="card-title">{course.title}</h3>
          {/* Mostra a duração se ela existir no objeto do curso */}
          {course.duration && (
            <span className="card-duration">
              {durationMap[course.duration] || course.duration}
            </span>
          )}
        </div>
        <p className="card-reviews">
          {course.rating} Avaliações <FaStar className="star-icon" />
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
