import { render, screen, cleanup } from '@testing-library/react';
import Update from './../Update';

afterEach(cleanup);

test('renders update', () => {
  render(<Update />);
  const linkElement = screen.getByText(/Update/i);
  expect(linkElement).toBeInTheDocument();
});