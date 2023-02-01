import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../views/app/App';

test('renders login', async () => {
  render(<App />);

  await screen.findByTestId('login');

});
