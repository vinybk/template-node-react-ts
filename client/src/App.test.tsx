// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello message', () => {
    render(<App />);
    expect(screen.getByText(/Hello, Vite/)).toBeInTheDocument();
});
