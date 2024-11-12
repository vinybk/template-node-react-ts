import React, { useEffect, useState } from 'react';

const RoomPage = () => {
  const [loadedChunks, setLoadedChunks] = useState<number>(0);

  useEffect(() => {
    // Simulate progressive loading of chunks
    const timers: NodeJS.Timeout[] = [];

    // Load each chunk with increasing delays (e.g., 1 second for each chunk)
    for (let i = 1; i <= 3; i++) {
      const timer = setTimeout(() => {
        setLoadedChunks((prev) => prev + 1);
      }, i * 1000); // i * 1000 ms = progressively delayed by 1 second per chunk
      timers.push(timer);
    }

    // Clear timeouts on component unmount
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <div style={{ height: '100vh', padding: '20px' }}>
      <h1>Welcome to the Room Page</h1>
      
      {/* Render chunks progressively as they load */}
      {loadedChunks >= 1 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Section 1: Room Details</h2>
          <p>This is the first section of the room page, containing basic room information.</p>
        </div>
      )}
      
      {loadedChunks >= 2 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Section 2: Room Features</h2>
          <p>This section contains details about the features available in the room, such as amenities, layout, and decor.</p>
        </div>
      )}
      
      {loadedChunks >= 3 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Section 3: Booking Information</h2>
          <p>This final section provides booking information, including availability, pricing, and reservation options.</p>
        </div>
      )}
    </div>
  );
};

export default RoomPage;
