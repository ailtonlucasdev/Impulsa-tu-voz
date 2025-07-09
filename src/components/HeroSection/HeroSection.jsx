// src/components/HeroSection/HeroSection.jsx

import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Tu camino comienza aquí</h1>
          <p>
            Sabemos lo difícil que es comenzar de nuevo en otro país. 
            Nuestros cursos te ofrecen herramientas reales para que puedas trabajar, 
            emprender y apoyar a tu familia con más seguridad. 
            ¡Regístrate y empieza a construir tu camino profesional con nosotras!
          </p>
        </div>
        <div className="hero-image-placeholder">
          {/* Vídeo de apresentação */}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;