import React from 'react';
import './SpecialtiesSection.css';
// ícones para importação
import { FaLaptopCode, FaGraduationCap, FaLanguage, FaUtensils } from 'react-icons/fa';

const specialties = [
  { name: 'Tecnologia', icon: <FaLaptopCode size={40} /> },
  { name: 'Educação', icon: <FaGraduationCap size={40} /> },
  { name: 'Linguagens', icon: <FaLanguage size={40} /> },
  { name: 'Culinária', icon: <FaUtensils size={40} /> },
];

function SpecialtiesSection() {
  return (
    <section className="specialties-container">
      <div className="specialties-header">
        <p className="pre-title">Area de especialidade</p>
        <h2>Especialízate y abre las puertas a más oportunidades</h2>
      </div>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          <div className="specialty-card" key={index}>
            <div className="specialty-icon">{specialty.icon}</div>
            <h3 className="specialty-name">{specialty.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpecialtiesSection;