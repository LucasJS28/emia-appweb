import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Mis Tareas heading', () => {
  render(<App />);
  const heading = screen.getByText(/Mis Tareas/i);
  expect(heading).toBeInTheDocument();
});
