import express from 'express';

const app = express();
app.use(express.json());

// Dummy API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Dummy API endpoint 2
app.get('/api/goodbye', (req, res) => {
  res.json({ message: 'Goodbye, world!' });
});

export default app;
