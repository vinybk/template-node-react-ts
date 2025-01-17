// App.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mocking components
jest.mock('@/pages/RoomPage', () => () => <div>Room Page Content</div>);
jest.mock('@/components/LoginModal', () => (props: any) => (
  <div>
    {props.isOpen && (
      <>
        <div>Login Modal</div>
        <button onClick={props.onClose}>Close Modal</button>
      </>
    )}
  </div>
));

describe('App Component', () => {
  test('renders RoomPage and toggles modal visibility', async () => {
    render(<App />);

    // Check LoginModal is visible
    expect(screen.getByText('Login Modal')).toBeInTheDocument();

    // Wait for RoomPage content to render
    await waitFor(() => {
      expect(screen.getByText('Room Page Content')).toBeInTheDocument();
    });

    // Close the modal
    fireEvent.click(screen.getByText('Close Modal'));

    // Verify LoginModal is removed
    await waitFor(() => {
      expect(screen.queryByText('Login Modal')).not.toBeInTheDocument();
    });

    // Ensure RoomPage remains visible
    expect(screen.getByText('Room Page Content')).toBeInTheDocument();
  });
});
