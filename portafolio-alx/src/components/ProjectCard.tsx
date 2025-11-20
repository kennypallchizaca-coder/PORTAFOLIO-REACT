import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<Project> = ({ title, description, imgUrl, url }) => (
  <article className="project-card">
    <div className="project-thumb">
      <img src={imgUrl} alt={title} />
    </div>
    <div className="project-body">
      <h3>{title}</h3>
      <p>{description}</p>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer" className="btn ghost small">
          Ver proyecto
        </a>
      ) : null}
    </div>
  </article>
);

export default ProjectCard;
