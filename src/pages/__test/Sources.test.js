import { render, screen } from '@testing-library/react';
import Sources from './../Sources';

test('renders sources', () => {
  render(<Sources />);
  const linkElement = screen.getByText(/Sources/i);
  expect(linkElement).toBeInTheDocument();
});