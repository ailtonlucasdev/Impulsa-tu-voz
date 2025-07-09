// src/components/Testimonials/Testimonials.jsx

import React from 'react';
import './Testimonials.css';
// Pode usar um ícone de aspas ou de utilizador de react-icons
import { FaUserCircle } from 'react-icons/fa';

const mockTestimonials = [
  {
    name: 'Estudante 1',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis. Voluptatibus, nemo.'
  },
  {
    name: 'Estudante 2',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis. Voluptatibus, nemo.'
  },
  {
    name: 'Estudante 3',
    quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, officiis. Voluptatibus, nemo.'
  }
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">Ellas ya dieron el paso. Esto es lo que cuentan.</h2>
      <div className="testimonials-grid">
        {mockTestimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div className="testimonial-icon-placeholder">
                {/* <FaUserCircle size={24} /> */}
              </div>
              <h4>{testimonial.name}</h4>
            </div>
            <p className="testimonial-quote">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
