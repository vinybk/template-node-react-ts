import express from 'express';

const app = express();
app.use(express.json());

// Dummy API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

export default app;
