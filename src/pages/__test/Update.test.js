// import React from 'react';
// import ReactDOM  from 'react-dom';
// import Update from './../Update';

// it("renders without crashing", ()=>{
//     const div = document.createElement("div");
//     ReactDOM.render(<Update></Update>, div)
// })

// import { createRoot } from 'react-dom/client';
// import Update from './../Update';
// const container = document.getElementById('app');
// const root = createRoot(container); 
// root.render(<Update />);

import { render, screen } from '@testing-library/react';
import Update from './../Update';

test('renders update', () => {
  render(<Update />);
  const linkElement = screen.getByText(/Update/i);
  expect(linkElement).toBeInTheDocument();
});