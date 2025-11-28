import React, { useEffect, useMemo, useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Advisories: React.FC = () => {
  const { programmers, role, advisories, createAdvisory, updateAdvisoryStatus } = usePortfolio();
  const [selectedProgrammer, setSelectedProgrammer] = useState(programmers[0]?.id ?? '');
  const [requester, setRequester] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (programmers.length && !programmers.find((p) => p.id === selectedProgrammer)) {
      setSelectedProgrammer(programmers[0].id);
    }
  }, [programmers, selectedProgrammer]);

  const programmer = useMemo(
    () => programmers.find((p) => p.id === selectedProgrammer) ?? programmers[0],
    [programmers, selectedProgrammer]
  );

  const availableTimes = (programmer?.availability ?? []).flatMap((slot) => slot.times.map((t) => `${slot.day} ${t}`));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!requester || !date || !time) return;

    createAdvisory({
      programmerId: programmer.id,
      requester,
      date,
      time,
      comment
    });
    setRequester('');
    setDate('');
    setTime('');
    setComment('');
  };

  const requests = useMemo(() => {
    if (role === 'Administrador') return advisories;
    return advisories.filter((req) => req.programmerId === programmer?.id);
  }, [advisories, programmer?.id, role]);

  return (
    <section className="advisories" id="asesorias">
      <div className="section-header">
        <span className="tagline">Asesorías y horarios</span>
        <h2>Agenda con programadores disponibles</h2>
        <p>
          Selecciona un programador, elige un horario y deja un comentario. El programador puede aprobar o rechazar la
          solicitud desde su panel.
        </p>
        <div className="chips-row">
          <span className="chip ghost">Rol activo: {role}</span>
          <span className="chip">Flujo simulado de notificaciones</span>
        </div>
      </div>

      <div className="advisory-layout">
        <div className="advisory-form">
          <h3>Agendar asesoría</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Programador
              <select value={selectedProgrammer} onChange={(e) => setSelectedProgrammer(e.target.value)}>
                {programmers.map((dev) => (
                  <option key={dev.id} value={dev.id}>
                    {dev.name} — {dev.specialty}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Nombre del solicitante
              <input
                value={requester}
                onChange={(e) => setRequester(e.target.value)}
                placeholder="Escribe tu nombre"
                required
              />
            </label>

            <div className="inputs">
              <label>
                Fecha
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>
              <label>
                Hora
                <select value={time} onChange={(e) => setTime(e.target.value)} required>
                  <option value="">Selecciona un horario</option>
                  {availableTimes.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label>
              Comentario (opcional)
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Tema o contexto de la asesoría"
                rows={3}
              />
            </label>

            <button type="submit" className="btn primary">
              Enviar solicitud
            </button>
          </form>
        </div>

        <div className="advisory-panel">
          <h3>Panel del programador</h3>
          <div className="availability">
            <p className="availability-title">Disponibilidad de {programmer.name}</p>
            <div className="availability-grid">
              {programmer.availability.map((slot) => (
                <div key={slot.day} className="availability-card">
                  <strong>{slot.day}</strong>
                  <div className="tech-list">
                    {slot.times.map((t) => (
                      <span key={t} className="chip tiny">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="requests">
            {requests.length === 0 ? (
              <p className="muted">Aún no hay solicitudes. Envía la primera para probar el flujo.</p>
            ) : (
              requests.map((req) => (
                <article key={req.id} className="request-card">
                  <div className="request-meta">
                    <div>
                      <h4>{req.requester}</h4>
                      <p>
                        {req.date} — {req.time}
                      </p>
                      <span className={`chip ${req.status === 'Pendiente' ? 'ghost' : ''}`}>{req.status}</span>
                    </div>
                    <div className="request-actions">
                      {role !== 'Usuario' ? (
                        <>
                          <button
                            type="button"
                            className="btn primary small"
                            onClick={() => updateAdvisoryStatus(req.id, 'Aprobada')}
                          >
                            Aprobar
                          </button>
                          <button
                            type="button"
                            className="btn ghost small"
                            onClick={() => updateAdvisoryStatus(req.id, 'Rechazada')}
                          >
                            Rechazar
                          </button>
                        </>
                      ) : null}
                    </div>
                  </div>
                  {req.comment ? <p className="muted">“{req.comment}”</p> : null}
                  {req.resolutionNote ? <p className="resolution">{req.resolutionNote}</p> : null}
                </article>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advisories;
