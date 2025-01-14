import request from 'supertest';
import app from '../src/app';

describe('Basic OAuth route tests', () => {
    it('should respond with a redirect on GET /auth/google', async () => {
        const response = await request(app).get('/auth/google');
        expect(response.status).toBe(302); // Check if it redirects
    });

    it('should respond with a redirect on GET /auth/google/callback', async () => {
        const response = await request(app).get('/auth/google/callback');
        expect(response.status).toBe(302); // Check if it redirects
    });
});
