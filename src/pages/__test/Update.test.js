import { render, screen } from '@testing-library/react';
import Update from './../Update';

test('renders update', () => {
  render(<Update />);
  const linkElement = screen.getByText(/Update/i);
  expect(linkElement).toBeInTheDocument();
});