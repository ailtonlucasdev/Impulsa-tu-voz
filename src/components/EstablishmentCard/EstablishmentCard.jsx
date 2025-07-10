// src/components/EstablishmentCard/EstablishmentCard.jsx

import React from 'react';
import './EstablishmentCard.css';

// Componente para exibir um único estabelecimento
function EstablishmentCard({ establishment }) {
  return (
    <div className="establishment-card">
      <div className="establishment-image-placeholder">
        {/* Placeholder para a imagem do estabelecimento */}
      </div>
      <div className="establishment-content">
        <h4>{establishment.name}</h4>
        <p>{establishment.location}</p>
        <a href={establishment.mapLink} target="_blank" rel="noopener noreferrer">
          Ver no mapa
        </a>
      </div>
    </div>
  );
}

export default EstablishmentCard;
