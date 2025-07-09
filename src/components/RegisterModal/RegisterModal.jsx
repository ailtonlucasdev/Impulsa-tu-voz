// src/components/RegisterModal/RegisterModal.jsx

import React from 'react';
import './RegisterModal.css';
import { FaTimes } from 'react-icons/fa'; // Ícone para o botão de fechar

// O componente recebe a função 'onClose' como uma propriedade (prop)
function RegisterModal({ onClose }) {

  // Função para fechar o modal se o clique for no fundo, mas não no conteúdo
  const handleBackdropClick = (e) => {
    if (e.target.className === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="modal-body">
          <div className="form-column">
            <h2>¡Regístrate!</h2>
            <p>Crear tu cuenta es muy fácil: solo toma un minuto y es totalmente gratis.</p>
            
            <form className="register-form">
              <div className="form-group">
                <label htmlFor="name">¿Cómo se llama usted?</label>
                <input type="text" id="name" placeholder="Escribe aquí" />
              </div>
              <div className="form-group">
                <label htmlFor="address">¿En qué calle vives y cuál es el número?</label>
                <input type="text" id="address" placeholder="Escribe aquí" />
              </div>
              <div className="form-group">
                <label htmlFor="birthdate">¿Cuál es tu fecha de nacimiento?</label>
                <input type="date" id="birthdate" />
              </div>
              <div className="form-group">
                <label htmlFor="email">¿Cuál es tu correo electrónico?</label>
                <input type="email" id="email" placeholder="Escribe aquí" />
              </div>
              
              <div className="form-buttons">
                <button type="button" className="form-btn-secondary">Anterior</button>
                <button type="submit" className="form-btn-primary">Próximo</button>
              </div>
            </form>
          </div>
          
          <div className="image-column">
            {/* Placeholder para a imagem */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
