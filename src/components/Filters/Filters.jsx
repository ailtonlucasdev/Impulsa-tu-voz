// src/components/Filters/Filters.jsx

import React from 'react';
import './Filters.css';
import { FaSearch, FaFilter } from 'react-icons/fa';

function Filters() {
  return (
    <div className="filters-container">
      <div className="filter-item dropdown-filter">
        <span className="filter-icon-placeholder"></span>
        <span>Área de especialidade</span>
      </div>
      <div className="filter-item dropdown-filter">
        <span>Nível básico</span>
      </div>
      <div className="filter-item dropdown-filter">
        <span>Curto tempo</span>
      </div>
      <div className="filter-item search-filter">
        <input type="text" placeholder="Busca pelo curso" />
        <FaSearch className="search-icon" />
      </div>
      <button className="filter-button">
        <FaFilter /> Filtrar
      </button>
    </div>
  );
}

export default Filters;