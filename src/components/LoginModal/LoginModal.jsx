// src/components/LoginModal/LoginModal.jsx

import React, { useState } from 'react';
import './LoginModal.css';
import { FaTimes, FaEye, FaEyeSlash, FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';

// O componente recebe props para se fechar e para mudar para o modal de registro
function LoginModal({ onClose, onSwitchToRegister }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleBackdropClick = (e) => {
    if (e.target.className === 'login-modal-backdrop') {
      onClose();
    }
  };

  return (
    <div className="login-modal-backdrop" onClick={handleBackdropClick}>
      <div className="login-modal-content">
        <button className="login-close-button" onClick={onClose}>
          <FaTimes />
        </button>
        
        <div className="login-modal-body">
          <div className="login-form-column">
            <h2>¡Entra na sua conta!</h2>
            <p>Entre tu cuenta es muy fácil</p>
            
            <form className="login-form">
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" placeholder="Escribe aquí" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input 
                    type={showPassword ? 'text' : 'password'} 
                    id="password" 
                    placeholder="Escribe aquí" 
                  />
                  <span className="password-toggle-icon" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              <a href="#" className="forgot-password-link">¿Esqueceu sua senha?</a>
              
              <button type="submit" className="form-btn-primary">Iniciar Seção</button>
            </form>

            <div className="divider">
              <span>Ou continue com</span>
            </div>

            <div className="social-login-options">
              <button className="social-btn"><FaGoogle /> Entre com o Google</button>
              <button className="social-btn"><FaFacebookF /> Entre com o Facebook</button>
              <button className="social-btn"><FaApple /> Entre com a Apple</button>
            </div>

            <div className="login-footer">
              <p>Novo no Impulsa? <button className="switch-link" onClick={onSwitchToRegister}>Registre-se</button></p>
            </div>
          </div>
          
          <div className="login-image-column">
            {/* Placeholder para a imagem */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
