import React from 'react';
import meter1 from '../assets/font/img/meter1.svg';
import meter2 from '../assets/font/img/meter2.svg';
import meter3 from '../assets/font/img/meter3.svg';
import colorSharp from '../assets/font/img/color-sharp.png';
import { Skill } from '../types';

const skills: Skill[] = [
  {
    title: 'React + TypeScript',
    level: 'Arquitecturas escalables y componentes reutilizables.',
    img: meter1
  },
  {
    title: 'UI & UX',
    level: 'Diseños responsivos con foco en accesibilidad.',
    img: meter2
  },
  {
    title: 'DevOps básico',
    level: 'Automatización, CI/CD y despliegues en la nube.',
    img: meter3
  }
];

const Skills: React.FC = () => (
  <section className="skills" id="skills">
    <div className="section-header">
      <span className="tagline">Stack principal</span>
      <h2>Habilidades</h2>
      <p>Lo que suelo usar para entregar productos completos.</p>
    </div>
    <div className="skill-grid">
      {skills.map((skill) => (
        <article className="skill-card" key={skill.title}>
          <img src={skill.img} alt="" aria-hidden className="skill-meter" />
          <h3>{skill.title}</h3>
          <p>{skill.level}</p>
        </article>
      ))}
    </div>
    <img className="decoration left" src={colorSharp} alt="" aria-hidden />
  </section>
);

export default Skills;
