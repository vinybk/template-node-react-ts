import request from 'supertest';
import app from '../src/app';

describe('Basic App Test', () => {
    it('should respond with 404 for an unknown route', async () => {
        const response = await request(app).get('/unknown-route');
        expect(response.status).toBe(404); // The app should return 404 for unknown routes
    });
});
