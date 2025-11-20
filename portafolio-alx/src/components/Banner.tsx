import React from 'react';
import headerImg from '../assets/font/img/header-img.svg';
import colorSharp from '../assets/font/img/color-sharp.png';

const Banner: React.FC = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-copy">
        <span className="tagline">Bienvenido a mi mundo digital</span>
        <h1>
          Hola, soy <span className="highlight">Kenny</span>
        </h1>
        <p>
          Desarrollo interfaces limpias, rápidas y accesibles. Me gusta convertir ideas en
          productos reales apoyándome en React, TypeScript y buenas prácticas de UX.
        </p>
        <div className="banner-actions">
          <a className="btn primary" href="#projects">
            Ver proyectos
          </a>
          <a className="btn ghost" href="#contact">
            Contáctame
          </a>
        </div>
      </div>

      <div className="banner-visual">
        <img src={headerImg} alt="Ilustración de desarrollador" />
        <img className="banner-glow" src={colorSharp} alt="" aria-hidden />
      </div>
    </section>
  );
};

export default Banner;
