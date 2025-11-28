import React, { useEffect, useMemo, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { PortfolioProject } from '../types';

const Portfolios: React.FC = () => {
  const { programmers, role, addProject } = usePortfolio();
  const [selected, setSelected] = useState(programmers[0]?.id ?? '');
  const [techInput, setTechInput] = useState('');
  const [projectForm, setProjectForm] = useState<Omit<PortfolioProject, 'technologies'>>({
    title: '',
    description: '',
    section: 'Académico',
    participation: '',
    imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60'
  });

  useEffect(() => {
    if (programmers.length && !programmers.find((p) => p.id === selected)) {
      setSelected(programmers[0].id);
    }
  }, [programmers, selected]);

  const programmer = useMemo(
    () => programmers.find((p) => p.id === selected) ?? programmers[0],
    [programmers, selected]
  );

  const groupBySection = (projects: PortfolioProject[]) => {
    return projects.reduce<Record<string, PortfolioProject[]>>((acc, project) => {
      if (!acc[project.section]) acc[project.section] = [];
      acc[project.section].push(project);
      return acc;
    }, {});
  };

  const grouped = groupBySection(programmer?.projects ?? []);

  const handleProjectSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!programmer || !projectForm.title || !projectForm.description) return;

    const technologies = techInput
      .split(',')
      .map((tech) => tech.trim())
      .filter(Boolean);

    addProject(programmer.id, {
      ...projectForm,
      technologies,
      repoUrl: projectForm.repoUrl,
      demoUrl: projectForm.demoUrl
    });

    setProjectForm({
      title: '',
      description: '',
      section: 'Académico',
      participation: '',
      imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60'
    });
    setTechInput('');
  };

  return (
    <section className="portfolios" id="portafolios">
      <div className="section-header">
        <span className="tagline">Portafolios administrables</span>
        <h2>Programadores y secciones diferenciadas</h2>
        <p>
          Cada programador gestiona sus proyectos académicos y laborales con enlaces a repositorios y despliegues.
          Usa el selector para revisar el portafolio de cada uno.
        </p>
      </div>

      <div className="portfolio-layout">
        <aside className="portfolio-list" aria-label="Programadores disponibles">
          {programmers.map((dev) => (
            <button
              key={dev.id}
              type="button"
              className={`portfolio-chip ${dev.id === programmer.id ? 'active' : ''}`}
              onClick={() => setSelected(dev.id)}
            >
              <img src={dev.avatar} alt="" aria-hidden />
              <div>
                <strong>{dev.name}</strong>
                <span>{dev.specialty}</span>
              </div>
            </button>
          ))}
        </aside>

        <div className="portfolio-detail">
          <header className="portfolio-header">
            <div>
              <h3>{programmer.name}</h3>
              <p>{programmer.bio}</p>
            </div>
            <div className="link-chips">
              {programmer.links.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="chip ghost">
                  {link.label}
                </a>
              ))}
            </div>
          </header>

          {(role === 'Administrador' || role === 'Programador') && programmer ? (
            <div className="card">
              <div className="card-header">
                <div>
                  <p className="tagline">Gestión de proyectos</p>
                  <h4>Registrar proyecto en el portafolio</h4>
                </div>
                <span className="chip ghost">{role}</span>
              </div>
              <form className="form-grid" onSubmit={handleProjectSubmit}>
                <label>
                  Título
                  <input
                    value={projectForm.title}
                    onChange={(e) => setProjectForm((prev) => ({ ...prev, title: e.target.value }))}
                    placeholder="Ej: Portal multiusuario"
                    required
                  />
                </label>
                <label>
                  Participación
                  <input
                    value={projectForm.participation}
                    onChange={(e) => setProjectForm((prev) => ({ ...prev, participation: e.target.value }))}
                    placeholder="Frontend, Backend, Fullstack"
                  />
                </label>
                <label>
                  Sección
                  <select
                    value={projectForm.section}
                    onChange={(e) =>
                      setProjectForm((prev) => ({ ...prev, section: e.target.value as PortfolioProject['section'] }))
                    }
                  >
                    <option value="Académico">Académico</option>
                    <option value="Laboral">Laboral</option>
                  </select>
                </label>
                <label>
                  Tecnologías
                  <input
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                    placeholder="Angular, Firebase, Node"
                  />
                </label>
                <label className="full">
                  Descripción
                  <textarea
                    value={projectForm.description}
                    onChange={(e) => setProjectForm((prev) => ({ ...prev, description: e.target.value }))}
                    rows={3}
                    placeholder="Funcionalidades clave, despliegues y métricas"
                    required
                  />
                </label>
                <label>
                  URL código
                  <input
                    value={projectForm.repoUrl ?? ''}
                    onChange={(e) => setProjectForm((prev) => ({ ...prev, repoUrl: e.target.value }))}
                    placeholder="https://github.com/"
                  />
                </label>
                <label>
                  URL demo
                  <input
                    value={projectForm.demoUrl ?? ''}
                    onChange={(e) => setProjectForm((prev) => ({ ...prev, demoUrl: e.target.value }))}
                    placeholder="https://app.web.app"
                  />
                </label>
                <div className="form-actions full">
                  <button type="submit" className="btn primary">
                    Añadir proyecto
                  </button>
                  <p className="muted small">Se muestra en el portafolio público y el panel de asesorías.</p>
                </div>
              </form>
            </div>
          ) : null}

          <div className="portfolio-projects">
            {Object.entries(grouped).map(([section, list]) => (
              <div key={section} className="portfolio-section">
                <div className="portfolio-section-head">
                  <span className="chip">{section}</span>
                  <p>{section === 'Académico' ? 'Proyectos vinculados a actividades de clase.' : 'Proyectos profesionales o simulados.'}</p>
                </div>
                <div className="portfolio-cards">
                  {list.map((project) => (
                    <article key={project.id ?? project.title} className="portfolio-card">
                      <div className="portfolio-meta">
                        <h4>{project.title}</h4>
                        <span className="chip ghost">{project.participation}</span>
                      </div>
                      <p>{project.description}</p>
                      <div className="tech-list">
                        {project.technologies?.map((tech) => (
                          <span key={tech} className="chip tiny">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="card-actions">
                        {project.repoUrl ? (
                          <a className="btn ghost small" href={project.repoUrl} target="_blank" rel="noreferrer">
                            Código
                          </a>
                        ) : null}
                        {project.demoUrl ? (
                          <a className="btn primary small" href={project.demoUrl} target="_blank" rel="noreferrer">
                            Demo
                          </a>
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolios;
