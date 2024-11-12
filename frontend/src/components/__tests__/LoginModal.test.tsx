// LoginModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal from '../LoginModal';

test('calls onRegister when register link is clicked', () => {
    const onRegister = jest.fn();
    render(<LoginModal isOpen={true} onRegister={onRegister} onGoogleSignIn={() => {}} onEmailSignIn={() => {}} />);
    
    fireEvent.click(screen.getByText("Don’t have an account? Register"));
    expect(onRegister).toHaveBeenCalledTimes(1);
});

test('captures input values and calls onEmailSignIn on submit', () => {
    const onEmailSignIn = jest.fn();
    render(<LoginModal isOpen={true} onRegister={() => {}} onGoogleSignIn={() => {}} onEmailSignIn={onEmailSignIn} />);
    
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'user@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    
    fireEvent.click(screen.getByText('Sign in'));
    expect(onEmailSignIn).toHaveBeenCalledWith('user@example.com', 'password123');
});
