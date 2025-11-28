import React, { useMemo, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { AvailabilitySlot } from '../types';

const AdminPanel: React.FC = () => {
  const { role, setRole, programmers, advisories, addProgrammer } = usePortfolio();

  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('https://api.dicebear.com/7.x/thumbs/svg?seed=Nuevo');
  const [linkLabel, setLinkLabel] = useState('Portafolio');
  const [linkUrl, setLinkUrl] = useState('');
  const [availability, setAvailability] = useState<AvailabilitySlot[]>([]);
  const [slotDay, setSlotDay] = useState('');
  const [slotTimes, setSlotTimes] = useState('');

  const totalProjects = useMemo(
    () => programmers.reduce((acc, programmer) => acc + programmer.projects.length, 0),
    [programmers]
  );

  const pendingAdvisories = useMemo(
    () => advisories.filter((request) => request.status === 'Pendiente').length,
    [advisories]
  );

  const handleAddSlot = () => {
    if (!slotDay || !slotTimes) return;
    const times = slotTimes
      .split(',')
      .map((time) => time.trim())
      .filter(Boolean);

    if (!times.length) return;

    setAvailability((prev) => [...prev, { day: slotDay, times }]);
    setSlotDay('');
    setSlotTimes('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name || !specialty || !bio || !linkUrl) return;

    addProgrammer({
      name,
      specialty,
      bio,
      avatar,
      links: [{ label: linkLabel, url: linkUrl }],
      availability: availability.length
        ? availability
        : [
            {
              day: 'Lunes',
              times: ['09:00', '11:00']
            }
          ],
      projects: []
    });

    setName('');
    setSpecialty('');
    setBio('');
    setLinkUrl('');
    setLinkLabel('Portafolio');
    setAvailability([]);
  };

  return (
    <section className="admin" id="admin">
      <div className="section-header">
        <span className="tagline">Administrador</span>
        <h2>Gestión de programadores y agenda</h2>
        <p>
          Registra cuentas de programadores, define horarios de asesoría y monitorea el estado de las solicitudes.
          Todo queda listo para integrarse con autenticación y permisos en Firebase.
        </p>
      </div>

      {role !== 'Administrador' ? (
        <div className="alert">
          <div>
            <strong>Estás viendo el flujo como {role}.</strong>
            <p>Activa la vista de administrador para gestionar usuarios y métricas.</p>
          </div>
          <button type="button" className="btn primary" onClick={() => setRole('Administrador')}>
            Cambiar a administrador
          </button>
        </div>
      ) : null}

      <div className="panel-grid">
        <div className="stat-cards">
          <article className="stat-card">
            <p className="muted">Programadores</p>
            <strong>{programmers.length}</strong>
            <span>Registrados para portafolios individuales</span>
          </article>
          <article className="stat-card">
            <p className="muted">Proyectos activos</p>
            <strong>{totalProjects}</strong>
            <span>Académicos y laborales</span>
          </article>
          <article className="stat-card">
            <p className="muted">Asesorías pendientes</p>
            <strong>{pendingAdvisories}</strong>
            <span>Esperando aprobación</span>
          </article>
        </div>

        <div className="card">
          <div className="card-header">
            <div>
              <p className="tagline">Alta de programadores</p>
              <h3>Crear nuevo perfil</h3>
            </div>
            <span className="chip ghost">Solo admin</span>
          </div>
          <form className="form-grid" onSubmit={handleSubmit}>
            <label>
              Nombre completo
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Sofía Gómez" required />
            </label>
            <label>
              Especialidad
              <input
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                placeholder="Frontend, Backend, Fullstack"
                required
              />
            </label>
            <label className="full">
              Descripción breve
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                placeholder="Experiencia, stack y enfoque de trabajo"
                required
              />
            </label>
            <label>
              Avatar (URL)
              <input value={avatar} onChange={(e) => setAvatar(e.target.value)} placeholder="https://..." />
            </label>
            <label>
              Etiqueta de enlace
              <input value={linkLabel} onChange={(e) => setLinkLabel(e.target.value)} />
            </label>
            <label>
              URL de contacto
              <input
                value={linkUrl}
                onChange={(e) => setLinkUrl(e.target.value)}
                placeholder="https://linkedin.com/in/"
                required
              />
            </label>

            <div className="full">
              <p className="label">Disponibilidad para asesorías</p>
              <div className="inline-form">
                <input
                  value={slotDay}
                  onChange={(e) => setSlotDay(e.target.value)}
                  placeholder="Día (ej: Martes)"
                />
                <input
                  value={slotTimes}
                  onChange={(e) => setSlotTimes(e.target.value)}
                  placeholder="Horarios separados por coma"
                />
                <button type="button" className="btn ghost" onClick={handleAddSlot}>
                  Añadir
                </button>
              </div>
              {availability.length ? (
                <div className="availability-grid compact">
                  {availability.map((slot) => (
                    <div key={slot.day} className="availability-card">
                      <strong>{slot.day}</strong>
                      <div className="tech-list">
                        {slot.times.map((time) => (
                          <span key={time} className="chip tiny">
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="muted">Aún no hay horarios. Agrega al menos un día y horario.</p>
              )}
            </div>

            <div className="form-actions full">
              <button type="submit" className="btn primary">
                Registrar programador
              </button>
              <p className="muted small">Se agrega al catálogo y podrá gestionar su portafolio al autenticarse.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
