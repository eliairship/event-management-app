import { app } from '../../app';
import request from 'supertest';

describe('/events', () => {
  describe('GET /events', () => {
    it('should respond with an array containing events', async () => {
      await request(app)
        .get('/events')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
    });
  });
});
