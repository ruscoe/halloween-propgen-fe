import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Halloween Prop Generator/i);
  expect(linkElement).toBeInTheDocument();
});
