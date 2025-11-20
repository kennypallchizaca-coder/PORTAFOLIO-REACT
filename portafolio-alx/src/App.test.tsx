import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra la sección de proyectos', () => {
  render(<App />);
  const heading = screen.getByText(/proyectos destacados/i);
  expect(heading).toBeInTheDocument();
});
