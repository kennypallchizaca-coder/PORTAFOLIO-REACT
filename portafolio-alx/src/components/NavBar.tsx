import React, { useEffect, useState } from 'react';
import logo from '../assets/font/img/logo.svg';
import navIcon1 from '../assets/font/img/nav-icon1.svg';
import navIcon2 from '../assets/font/img/nav-icon2.svg';
import navIcon3 from '../assets/font/img/nav-icon3.svg';

const links = [
  { id: 'home', label: 'Inicio' },
  { id: 'roles', label: 'Roles' },
  { id: 'admin', label: 'Admin' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'portafolios', label: 'Portafolios' },
  { id: 'asesorias', label: 'Asesorías' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
];

const NavBar: React.FC = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id: string) => {
    setActiveLink(id);
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <img className="navbar-logo" src={logo} alt="Logo" />
        <span className="navbar-title">Portafolio</span>
      </div>

      <nav className="navbar-links" aria-label="Secciones principales">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={activeLink === link.id ? 'active' : ''}
            onClick={() => handleClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="navbar-social">
        <div className="navbar-icons">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src={navIcon1} alt="" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
          >
            <img src={navIcon2} alt="" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <img src={navIcon3} alt="" />
          </a>
        </div>
        <a className="btn primary small" href="#contact">
          Hablemos
        </a>
      </div>
    </header>
  );
};

export default NavBar;
