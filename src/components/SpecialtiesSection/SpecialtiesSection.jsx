// src/components/SpecialtiesSection/SpecialtiesSection.jsx

import React from 'react';
import './SpecialtiesSection.css';
// ícones para importação
import { FaLaptopCode, FaGraduationCap, FaLanguage, FaUtensils } from 'react-icons/fa';

// Array de especialidades com os nomes atualizados e corrigidos
const specialties = [
  { name: 'Habilidades Digitales', icon: <FaLaptopCode size={40} />, filterKey: 'tecnologia' },
  { name: 'Validación y Cursos Técnicos', icon: <FaGraduationCap size={40} />, filterKey: 'educacao' },
  { name: 'Lenguajes para el Éxito', icon: <FaLanguage size={40} />, filterKey: 'linguagens' }, // CORRIGIDO
  { name: 'Gastronomía y Negocios', icon: <FaUtensils size={40} />, filterKey: 'culinaria' },
];

// O componente agora recebe a prop 'onNavigate'
function SpecialtiesSection({ onNavigate }) {
  return (
    <section className="specialties-container">
      <div className="specialties-header">
        <p className="pre-title">Area de especialidade</p>
        <h2>Especialízate y abre las puertas a más oportunidades</h2>
      </div>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          // Adicionamos o evento onClick ao card
          <div 
            className="specialty-card" 
            key={index} 
            // O onClick chama a função onNavigate, passando a chave do filtro
            onClick={() => onNavigate(specialty.filterKey)}
          >
            <div className="specialty-icon">{specialty.icon}</div>
            <h3 className="specialty-name">{specialty.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialtiesSection;
