import React from 'react';
import './SpecialtiesSection.css';
// ícones para importação
import { FaLaptopCode, FaGraduationCap, FaLanguage, FaUtensils } from 'react-icons/fa';

const specialties = [
  // Adicionamos um 'filterKey' para usar na navegação
  { name: 'Tecnologia', icon: <FaLaptopCode size={40} />, filterKey: 'tecnologia' },
  { name: 'Educação', icon: <FaGraduationCap size={40} />, filterKey: 'educacao' },
  { name: 'Linguagens', icon: <FaLanguage size={40} />, filterKey: 'linguagens' },
  { name: 'Culinária', icon: <FaUtensils size={40} />, filterKey: 'culinaria' },
];

// 1. O componente agora recebe a prop 'onNavigate'
function SpecialtiesSection({ onNavigate }) {
  return (
    <section className="specialties-container">
      <div className="specialties-header">
        <p className="pre-title">Area de especialidade</p>
        <h2>Especialízate y abre las puertas a más oportunidades</h2>
      </div>
      <div className="specialties-grid">
        {specialties.map((specialty, index) => (
          // 2. Adicionamos o evento onClick ao card
          <div 
            className="specialty-card" 
            key={index} 
            // 3. O onClick chama a função onNavigate, passando a chave do filtro
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
