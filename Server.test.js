const request = require('supertest');
const app = require('./Server'); 
describe('GET /', () => {
    it('should respond with "hello world"', async () => {
        const response = await request(app).get('/');
       
        expect(response.status).toBe(200);
        expect(response.text).toBe('hello world');
    });
});
