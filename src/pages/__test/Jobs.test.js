import { render, screen} from '@testing-library/react';
import Jobs from './../Jobs';

test('renders jobs', () => {
  render(<Jobs />);
  const linkElement = screen.getByText(/Jobs/i);
  expect(linkElement).toBeInTheDocument();
});


test('check the rendering of NEW JOB button', () => {
  render(<Jobs />);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement[0]).toHaveAccessibleName('New Job');
});

test('check the rendering of DELETE button', () => {
  render(<Jobs />);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement[1]).toHaveAccessibleName('Delete');
});

test('check the rendering of EDIT button', () => {
  render(<Jobs />);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement[2]).toHaveAccessibleName('Edit');
});