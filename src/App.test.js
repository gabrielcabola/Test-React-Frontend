import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Articles App link', () => {
  render(<App />);
  const AppElement = document.getElementById('Loader');
  expect(AppElement).toBeInTheDocument();
});



/**
 * TODOS:
 * 
 * Test router acess
 * Test router witch
 * 
 */
