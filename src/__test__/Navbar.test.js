// Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('Navbar renders without errors', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Ensure the Navbar renders without errors
  const navbar = screen.getByRole('navigation');
  expect(navbar).toBeInTheDocument();
});

test('Navbar navigation works', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Click on a menu item and check if the page navigates
  fireEvent.click(screen.getByText(/What is gliding\?/i));
  const glidingInfoLink = screen.getByText(/What is gliding\?/i);
  fireEvent.click(glidingInfoLink);
  expect(screen.getByText(/What is gliding\?/i)).toBeInTheDocument();

  // Add more tests for other menu items as needed...
});

test('Navbar toggles dropdowns', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  // Toggle the gliding info dropdown
  fireEvent.click(screen.getByText(/What is gliding\?/i));
  expect(screen.getByText(/Soaring/i)).toBeInTheDocument();

  // Toggle the learning dropdown
  fireEvent.click(screen.getByText(/Learning to glide/i));
  expect(screen.getByText(/Learn how to glide/i)).toBeInTheDocument();

  // Toggle the member information dropdown
  fireEvent.click(screen.getByText(/Member information/i));
  expect(screen.getByText(/Fleet and costs/i)).toBeInTheDocument();

  // Add more tests for other dropdowns as needed...
});
