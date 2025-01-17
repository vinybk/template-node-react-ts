// RoomPage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomPage from '../RoomPage.js';

describe('RoomPage Component', () => {
  test('renders without crashing', () => {
    render(<RoomPage />);

    // Check if the main header is rendered
    expect(screen.getByText('Welcome to the Room Page')).toBeInTheDocument();
  });
});
