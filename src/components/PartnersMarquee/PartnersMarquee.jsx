// src/components/PartnersMarquee/PartnersMarquee.jsx

import React from 'react';
import './PartnersMarquee.css';

// Criamos uma lista de parceiros de exemplo
const mockPartners = [
  { id: 1, name: 'Parceiro 1' },
  { id: 2, name: 'Parceiro 2' },
  { id: 3, name: 'Parceiro 3' },
  { id: 4, name: 'Parceiro 4' },
  { id: 5, name: 'Parceiro 5' },
  { id: 6, name: 'Parceiro 6' },
  { id: 7, name: 'Parceiro 7' },
];

function PartnersMarquee() {
  // O truque para o loop infinito é duplicar a lista de parceiros.
  const extendedPartners = [...mockPartners, ...mockPartners];

  return (
    <section className="partners-section">
      <h2 className="partners-title">Parceiros</h2>
      <div className="marquee-container">
        <div className="marquee-content">
          {extendedPartners.map((partner, index) => (
            <div className="partner-logo-placeholder" key={index}>
              {/* Aqui iria a tag <img> com o logo do parceiro */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersMarquee;