// button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

test('renders with default variant and size', () => {
  render(<Button>Click me</Button>);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});

test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
});


test('applies correct styles for "destructive" variant and "lg" size', () => {
    render(<Button variant="destructive" size="lg">Delete</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-destructive h-10 px-8');
});

