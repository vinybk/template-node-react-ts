// text.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Text from '../text';

test('renders with body variant by default', () => {
    render(<Text>Body Text</Text>);
    const text = screen.getByText(/Body Text/i);
    expect(text).toHaveClass('text-base text-gray-800');
});

test('applies hover style and calls onClick when provided', () => {
    const handleClick = jest.fn();
    render(<Text onClick={handleClick} className="cursor-pointer">Clickable Text</Text>);
    const text = screen.getByText(/Clickable Text/i);
    expect(text).toHaveClass('cursor-pointer text-blue-600 hover:text-blue-800');

    fireEvent.click(text);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
