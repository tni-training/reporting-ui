import { render, screen, cleanup} from '@testing-library/react';
import Editjob from '../Edit-job';

afterEach(cleanup);

test('renders Edit-job', () => {
  render(<Editjob/>);
  const linkElement = screen.getByText(/Job/i);
  expect(linkElement).toBeInTheDocument();
});

test('check the rendering of SAVE CHANGES button', () => {
  render(<Editjob/>);
  const linkElement = screen.getAllByRole('button');
  expect(linkElement[0]).toHaveAccessibleName('Save Changes');
});