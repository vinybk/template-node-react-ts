// App.test.tsx
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

// Mocking the components used in App
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
    // Render the App component
    render(<App />);

    // Assert that LoginModal is initially visible
    expect(screen.getByText('Login Modal')).toBeInTheDocument();

    // Assert that RoomPage is rendered
    expect(screen.getByText('Room Page Content')).toBeInTheDocument();

    // Simulate closing the modal
    fireEvent.click(screen.getByText('Close Modal'));

    // Ensure the modal disappears
    await waitFor(() => {
      expect(screen.queryByText('Login Modal')).not.toBeInTheDocument();
    });

    // Verify that RoomPage is still rendered
    expect(screen.getByText('Room Page Content')).toBeInTheDocument();
  });
});
