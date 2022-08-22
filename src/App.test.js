import { render, screen } from '@testing-library/react';
import App from './App';

test("Route-testing", ()=>{
  const container = render(<App/>);
  const route = container.getAllByRole("link");

  expect(route[0]).toHaveAccessibleName("Jobs");
  expect(route[1]).toHaveAccessibleName("Sources");
  expect(route[2]).toHaveAccessibleName("Destinations");
  expect(route[3]).toHaveAccessibleName("Update");
});
