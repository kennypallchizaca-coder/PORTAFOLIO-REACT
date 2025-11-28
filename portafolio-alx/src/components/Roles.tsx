import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Role } from '../types';

const roles: { id: Role; title: string; description: string; actions: string[]; highlight: string }[] = [
  {
    id: 'Administrador',
    title: 'Administrador',
    description: 'Crea programadores, gestiona horarios y revisa métricas de uso.',
    actions: ['Alta/baja de programadores', 'Asignación de roles y permisos', 'Gestión de horarios de asesoría'],
    highlight: 'Control total de usuarios y disponibilidad'
  },
  {
    id: 'Programador',
    title: 'Programador',
    description: 'Administra su portafolio y responde solicitudes de asesoría.',
    actions: ['CRUD de proyectos académicos y laborales', 'Actualización de enlaces y tecnologías', 'Aprobación o rechazo de asesorías'],
    highlight: 'Panel propio con proyectos y agenda'
  },
  {
    id: 'Usuario',
    title: 'Usuario externo',
    description: 'Explora portafolios y solicita asesorías según disponibilidad.',
    actions: ['Exploración pública de portafolios', 'Solicitud de asesoría con comentario', 'Recepción de confirmaciones'],
    highlight: 'Agendamiento rápido con notificaciones'
  }
];

const Roles: React.FC = () => {
  const { role, setRole } = usePortfolio();

  return (
    <section className="roles" id="roles">
      <div className="section-header">
        <span className="tagline">Autenticación y roles</span>
        <h2>Multiusuario con Google y Firebase</h2>
        <p>
          Activa la vista que necesites para validar permisos: el administrador crea programadores, cada programador gestiona su
          portafolio y los usuarios externos agendan asesorías.
        </p>
      </div>

      <div className="role-grid">
        {roles.map((roleCard) => (
          <article key={roleCard.id} className={`role-card ${roleCard.id === role ? 'active' : ''}`}>
            <div className="role-icon" aria-hidden>
              {roleCard.title[0]}
            </div>
            <div className="role-body">
              <h3>{roleCard.title}</h3>
              <p>{roleCard.description}</p>
              <ul>
                {roleCard.actions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="role-actions">
                <span className="chip ghost">{roleCard.highlight}</span>
                <button type="button" className="btn primary small" onClick={() => setRole(roleCard.id)}>
                  Ver flujo {roleCard.id === 'Usuario' ? 'externo' : roleCard.title.toLowerCase()}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Roles;
