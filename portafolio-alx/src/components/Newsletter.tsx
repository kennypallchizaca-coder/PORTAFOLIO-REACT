import React, { useState } from 'react';
import MailchimpForm from './MailchimpForm';

const Newsletter: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = async (email: string) => {
    // In a real setup you would POST to your email provider.
    console.info('Nuevo suscriptor:', email);
    setStatus('sent');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section className="newsletter">
      <div>
        <span className="tagline">Newsletter</span>
        <h2>Mantente al tanto</h2>
        <p>Recibe un correo cuando publique un nuevo proyecto o recurso.</p>
      </div>
      <div className="newsletter-actions">
        <MailchimpForm onSubmit={handleSubmit} />
        {status === 'sent' ? <small className="status success">¡Gracias por suscribirte!</small> : null}
      </div>
    </section>
  );
};

export default Newsletter;
