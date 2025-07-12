// src/components/Filters/Filters.jsx

import React, { useState } from 'react';
import './Filters.css';
import { FaSearch, FaFilter, FaAngleDown } from 'react-icons/fa';

// Opções para os filtros
const specialtyOptions = [
  { label: 'Todas as Áreas', value: 'all' },
  { label: 'Habilidades Digitales', value: 'tecnologia' },
  { label: 'Validación y Cursos Técnicos', value: 'educacao' },
  { label: 'Lenguajes para el Éxito', value: 'linguagens' },
  { label: 'Gastronomía y Negocios', value: 'culinaria' },
];

const levelOptions = [
  { label: 'Todos os Níveis', value: 'all' },
  { label: 'Básico', value: 'basico' },
  { label: 'Intermediário', value: 'intermediario' },
];

const durationOptions = [
  { label: 'Toda Duração', value: 'all' },
  { label: 'Curto (Até 1 mês)', value: 'curto' },
  { label: 'Médio (1-3 meses)', value: 'medio' },
];


function Filters({ setFilters }) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleOptionSelect = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
    setOpenDropdown(null); // Fecha o dropdown após a seleção
  };

  const handleSearchChange = (e) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      searchTerm: e.target.value
    }));
  };

  return (
    <div className="filters-container">
      {/* Filtro de Especialidade */}
      <div className="filter-item" onClick={() => handleDropdownToggle('specialty')}>
        <span>Área de especialidade</span> <FaAngleDown size={12}/>
        {openDropdown === 'specialty' && (
          <ul className="filter-dropdown">
            {specialtyOptions.map(opt => (
              <li key={opt.value} className="dropdown-option" onClick={() => handleOptionSelect('category', opt.value)}>
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filtro de Nível */}
      <div className="filter-item" onClick={() => handleDropdownToggle('level')}>
        <span>Nível</span> <FaAngleDown size={12}/>
        {openDropdown === 'level' && (
          <ul className="filter-dropdown">
            {levelOptions.map(opt => (
              <li key={opt.value} className="dropdown-option" onClick={() => handleOptionSelect('level', opt.value)}>
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filtro de Duração */}
      <div className="filter-item" onClick={() => handleDropdownToggle('duration')}>
        <span>Duração</span> <FaAngleDown size={12}/>
        {openDropdown === 'duration' && (
          <ul className="filter-dropdown">
            {durationOptions.map(opt => (
              <li key={opt.value} className="dropdown-option" onClick={() => handleOptionSelect('duration', opt.value)}>
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Filtro de Busca */}
      <div className="filter-item search-filter">
        <input 
          type="text" 
          placeholder="Busca pelo curso" 
          onChange={handleSearchChange}
        />
        <FaSearch className="search-icon" />
      </div>

      <button className="filter-button">
        <FaFilter /> Filtrar
      </button>
    </div>
  );
}

export default Filters;
