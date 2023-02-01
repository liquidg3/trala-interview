import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../views/app/App';

test('app renders login', async () => {
  render(<App />);
  await screen.findByTestId('login');
});
