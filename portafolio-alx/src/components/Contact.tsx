import React, { FormEvent, useState } from 'react';
import contactImg from '../assets/font/img/contact-img.svg';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'error' | 'sent'>('idle');

  const handleChange = (field: keyof ContactFormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    if (status !== 'idle') {
      setStatus('idle');
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }

    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-image">
        <img src={contactImg} alt="Persona enviando un mensaje" />
      </div>
      <div className="contact-form">
        <span className="tagline">Conversemos</span>
        <h2>Cuéntame sobre tu idea</h2>
        <p>Envíame los detalles y te responderé con una propuesta clara y accionable.</p>

        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <label>
              Nombre
              <input type="text" value={form.name} onChange={handleChange('name')} placeholder="Tu nombre" />
            </label>
            <label>
              Correo
              <input type="email" value={form.email} onChange={handleChange('email')} placeholder="tu@email.com" />
            </label>
          </div>
          <label>
            Mensaje
            <textarea value={form.message} onChange={handleChange('message')} rows={4} placeholder="Qué necesitas construir o mejorar" />
          </label>
          <div className="form-footer">
            <button type="submit" className="btn primary">
              Enviar
            </button>
            {status === 'sent' && <span className="status success">¡Mensaje listo! Te responderé pronto.</span>}
            {status === 'error' && <span className="status error">Completa todos los campos para continuar.</span>}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
