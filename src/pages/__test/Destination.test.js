import { render, screen, cleanup } from '@testing-library/react';
import Destination from './../Destination';

afterEach(cleanup);

test('renders Destination', () => {
  render(<Destination/>);
  const linkElement = screen.getByText(/Destination/i);
  expect(linkElement).toBeInTheDocument();
});