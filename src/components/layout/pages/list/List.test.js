import { render, screen } from '@testing-library/react';
import List from './List';

test('Renders List', () => {
  render(<Loader />);
  const element = screen.getByText(/List/i);
  expect(element).toBeInTheDocument();
});
