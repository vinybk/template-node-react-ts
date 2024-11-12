// App.tsx
import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginModal from '@/components/LoginModal';

// Lazy load RoomPage to load it in the background
const RoomPage = React.lazy(() => import('@/pages/RoomPage'));

function App() {
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

  return (
    <Router>
      {/* Render RoomPage in the background while the modal is open */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        <Suspense fallback={<div>Loading Room...</div>}>
          <div style={{ opacity: isLoginVisible ? 0.5 : 1 }}>
            <RoomPage />
          </div>
        </Suspense>

        {/* Display the modal on top of the background content */}
        {isLoginVisible && (
          <LoginModal
            isOpen={isLoginVisible}
            onClose={handleCloseLogin}
            onGoogleSignIn={() => console.log('Google Sign-In')}
            onEmailSignIn={(email, password) => console.log(`Email: ${email}, Password: ${password}`)}
            onRegister={() => console.log('Register')}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
