import { render, screen } from '@testing-library/react';
import Loader from './Loader';

test('Renders Loader', () => {
  render(<Loader />);
  const element = screen.getByText(/Loading/i);
  expect(element).toBeInTheDocument();
});
