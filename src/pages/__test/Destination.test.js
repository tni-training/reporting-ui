import { render, screen } from '@testing-library/react';
import Destination from './../Destination';

test('renders Destination', () => {
  render(<Destination/>);
  const linkElement = screen.getByText(/Destination/i);
  expect(linkElement).toBeInTheDocument();
});