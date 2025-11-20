import React from 'react';
import logo from '../assets/font/img/logo.svg';
import navIcon1 from '../assets/font/img/nav-icon1.svg';
import navIcon2 from '../assets/font/img/nav-icon2.svg';
import navIcon3 from '../assets/font/img/nav-icon3.svg';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-brand">
      <img src={logo} alt="Logo" />
      <div>
        <strong>Portafolio</strong>
        <p>Construyendo productos centrados en las personas.</p>
      </div>
    </div>
    <div className="footer-actions">
      <div className="navbar-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <img src={navIcon1} alt="" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <img src={navIcon2} alt="" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
          <img src={navIcon3} alt="" />
        </a>
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} Kenny · Disponible para nuevos retos.</p>
    </div>
  </footer>
);

export default Footer;
