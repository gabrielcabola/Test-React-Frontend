import { render } from '@testing-library/react';
import Loader from './Loader';

test('Renders Loader Component', () => {
  render(<Loader />);
  const loader = document.getElementById('Loader');
  expect(loader).toBeInTheDocument();
});

/**
 * TODOS:
 * 
 * Test using snapshots
 */

