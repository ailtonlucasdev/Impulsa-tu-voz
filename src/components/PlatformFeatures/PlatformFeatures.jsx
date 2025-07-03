import React from 'react';
import './PlatformFeatures.css';
// Ex: import { FaHandshake, FaGavel, FaChild } from 'react-icons/fa';

const features = [
  {
    title: 'Autonomía',
    description: 'Conquista tu autonomía con apoyo, formación y oportunidades reales',
    // icon: <FaHandshake size={40} />
  },
  {
    title: 'Asesoría jurídica',
    description: 'Conéctate con expertos y organizaciones que ofrecen orientación legal gratuita y segura para garantizar tus derechos en Brasil.',
    // icon: <FaGavel size={40} />
  },
  {
    title: 'Guarderías disponibles',
    description: 'Espacios pensados para el bienestar y desarrollo de tus pequeños mientras tú avanzas en tu camino profesional.',
    // icon: <FaChild size={40} />
  }
];

function PlatformFeatures() {
  return (
    <section className="features-section">
      <h2 className="features-main-title">Lo que te ofrece nuestra plataforma</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon-placeholder">{/* {feature.icon} */}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PlatformFeatures;