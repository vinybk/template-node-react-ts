import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Text from '@/components/ui/text';

type LoginModalProps = {
    isOpen: boolean;
    onGoogleSignIn: () => void;
    onEmailSignIn: (email: string, password: string) => void;
    onRegister: () => void;
    onClose: () => void;
};

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onGoogleSignIn, onEmailSignIn, onRegister }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Dialog open={isOpen}>
            <DialogContent
                aria-labelledby="login-dialog-title"
                aria-describedby="login-dialog-description"
            >
                <DialogHeader>
                    {/* Visible title for accessibility */}
                    <DialogTitle id="login-dialog-title">Welcome back!</DialogTitle>
                </DialogHeader>

                <Button variant="outline" onClick={onGoogleSignIn} id="login-dialog-description">
                    Sign in with Google
                </Button>

                <Text className="text-center my-4">or</Text>

                <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mb-2"
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4"
                />
                <Button onClick={() => onEmailSignIn(email, password)} className="w-full mb-2">
                    Sign in
                </Button>

                <Text className="text-center cursor-pointer" onClick={onRegister}>
                    Don’t have an account? Register
                </Text>

                <div className="flex justify-center mt-4 text-sm">
                    <a href="/terms" target="_blank" rel="noopener noreferrer" className="mr-2">
                        Terms of Use
                    </a>
                    <span>|</span>
                    <a href="/privacy" target="_blank" rel="noopener noreferrer" className="ml-2">
                        Privacy Policy
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
