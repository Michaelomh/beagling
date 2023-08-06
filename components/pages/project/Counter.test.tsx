import { render, screen } from '@testing-library/react';
import { Counter } from './Counter';

describe(Counter, () => {
  it('renders accordingly', () => {
    render(<Counter />);
    screen.getByRole('button', { name: 'test' });
  });
});
