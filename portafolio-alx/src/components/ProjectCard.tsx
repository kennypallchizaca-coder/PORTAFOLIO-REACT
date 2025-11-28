import React from 'react';
import { Project } from '../types';

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  imgUrl,
  url,
  category,
  participation,
  technologies,
  repoUrl,
  demoUrl
}) => (
  <article className="project-card">
    <div className="project-thumb">
      <img
        src={imgUrl || 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=60'}
        alt={title}
      />
    </div>
    <div className="project-body">
      <div className="project-header">
        <h3>{title}</h3>
        {category ? <span className="chip">{category}</span> : null}
      </div>
      <p>{description}</p>
      <div className="project-meta">
        {participation ? <span className="chip ghost">{participation}</span> : null}
        <div className="tech-list">
          {technologies?.map((tech) => (
            <span key={tech} className="chip tiny">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="card-actions">
        {repoUrl ? (
          <a href={repoUrl} target="_blank" rel="noreferrer" className="btn ghost small">
            Código
          </a>
        ) : null}
        {demoUrl ? (
          <a href={demoUrl} target="_blank" rel="noreferrer" className="btn primary small">
            Demo
          </a>
        ) : null}
        {!demoUrl && url ? (
          <a href={url} target="_blank" rel="noreferrer" className="btn primary small">
            Ver proyecto
          </a>
        ) : null}
      </div>
    </div>
  </article>
);

export default ProjectCard;
