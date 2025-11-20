import React, { FormEvent, useState } from 'react';

interface MailchimpFormProps {
  onSubmit: (email: string) => Promise<void> | void;
}

const MailchimpForm: React.FC<MailchimpFormProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    if (!email) return;

    await onSubmit(email);
    setEmail('');
  };

  return (
    <form className="newsletter-form" onSubmit={submit}>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="tu@email.com"
        required
      />
      <button className="btn primary" type="submit">
        Suscribirme
      </button>
    </form>
  );
};

export default MailchimpForm;
