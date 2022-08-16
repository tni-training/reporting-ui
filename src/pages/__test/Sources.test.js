import { render, screen, cleanup } from '@testing-library/react';
import Sources from './../Sources';

afterEach(cleanup);

test('renders sources', () => {
  render(<Sources />);
  const linkElement = screen.getByText(/Sources/i);
  expect(linkElement).toBeInTheDocument();
});