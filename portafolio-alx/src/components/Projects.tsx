import React from 'react';
import colorSharp2 from '../assets/font/img/color-sharp2.png';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const grouped = projects.reduce<Record<string, typeof projects>>((acc, project) => {
    const category = project.category ?? 'General';
    if (!acc[category]) acc[category] = [];
    acc[category].push(project);
    return acc;
  }, {});

  return (
    <section className="projects" id="projects">
      <div className="section-header">
        <span className="tagline">Trabajo reciente</span>
        <h2>Portafolio multiusuario</h2>
        <p>
          Proyectos alineados con el integrador: autenticación, gestión de portafolios y flujos de asesoría con despliegues en
          Firebase/Vercel.
        </p>
      </div>

      {Object.entries(grouped).map(([category, list]) => (
        <div key={category} className="projects-group">
          <div className="projects-group-head">
            <span className="chip">{category}</span>
            <p>
              {category === 'Académico'
                ? 'Ejercicios orientados a clase y pruebas de concepto.'
                : category === 'Laboral'
                  ? 'Simulaciones profesionales listas para producción.'
                  : 'Proyectos generales del portafolio.'}
            </p>
          </div>
          <div className="projects-grid">
            {list.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      ))}

      <img className="decoration right" src={colorSharp2} alt="" aria-hidden />
    </section>
  );
};

export default Projects;
