// src/components/Support/Support.jsx
import React from 'react';
import './Support.css';

const supportTopics = [
  {
    title: 'Apoyo jurídico',
    description: 'Recibir orientación y apoyo jurídico de forma gratuita y segura.'
  },
  {
    title: 'Hospitales',
    description: 'Recibir atención médica gratuita y de calidad.'
  },
  {
    title: 'Apoyo social',
    description: 'Recibir asistencia social gratuita y cercana.'
  },
  {
    title: 'Guarderías',
    description: 'Recibir atención médica gratuita y de calidad.'
  }
];

function Support() {
  return (
    <section className="support-section">
      <div className="support-header">
        <h2>Que más necessitas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="support-wrapper">
        <p className="support-subtitle">Haz clic en la opción deseada:</p>
        <div className="support-grid">
          {supportTopics.map((topic, index) => (
            <div className="support-card" key={index}>
              <div className="support-image-placeholder"></div>
              <div className="support-card-content">
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Support;
