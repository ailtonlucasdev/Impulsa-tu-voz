import React from 'react';
import './Footer.css';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h4>LGPD</h4>
          <a href="/lgpd">Política de Privacidade</a>
        </div>
        <div className="footer-column">
          <h4>Canais de comunicação</h4>
          <div className="social-icons">
            <a href="#" aria-label="Youtube"><FaYoutube /></a>
            <a href="#" aria-label="Linkedin"><FaLinkedin /></a>
            <a href="#" aria-label="Facebook"><FaFacebook /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="Tiktok"><FaTiktok /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Ouvidoria - ####-####</h4>
          <h4>Contatos - ####-####</h4>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Todo el contenido de este sitio está publicado bajo la licencia Creative Commons Atribución-SinDerivadas 3.0 No Adaptada.</p>
      </div>
    </footer>
  );
}

export default Footer;
