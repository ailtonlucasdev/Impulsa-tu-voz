// src/components/CourseCard/CourseCard.jsx

import React from 'react';
import './CourseCard.css';
import { FaStar } from 'react-icons/fa'; // Usaremos um ícone para a estrela

// O componente recebe 'course' como uma propriedade (prop)
function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="card-image-placeholder">
        {/* Este é o placeholder para a imagem do curso */}
      </div>
      <div className="card-content">
        <h3 className="card-title">{course.title}</h3>
        <p className="card-reviews">
          {course.rating} Avaliações <FaStar className="star-icon" />
        </p>
      </div>
    </div>
  );
}

export default CourseCard;