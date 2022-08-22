import { render, screen, cleanup } from '@testing-library/react';
import Newjob from '../New-job';

afterEach(cleanup);

test('renders New-job', () => {
  render(<Newjob/>);
  const linkElement = screen.getByText(/Job/i);
  expect(linkElement).toBeInTheDocument();
});

test('check the rendering of SAVE CHANGES button', () => {
  render(<Newjob/>);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement[0]).toHaveAccessibleName('Save');
});