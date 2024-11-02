import request from 'supertest';
import app from '../app';

describe('GET /api/hello', () => {
  it('should return a message', async () => {
    const res = await request(app).get('/api/hello');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'Hello, world!');
  });
});
