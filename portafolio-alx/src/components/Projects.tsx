import React from 'react';
import colorSharp2 from '../assets/font/img/color-sharp2.png';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => (
  <section className="projects" id="projects">
    <div className="section-header">
      <span className="tagline">Trabajo reciente</span>
      <h2>Proyectos destacados</h2>
      <p>Un vistazo rápido a cosas que he construido últimamente.</p>
    </div>

    <div className="projects-grid">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>

    <img className="decoration right" src={colorSharp2} alt="" aria-hidden />
  </section>
);

export default Projects;
