import supertest from 'supertest';
import { app } from 'index';

describe('user', () => {
  describe('register user route', () => {
    describe('given no username, password or email', () => {
      it('should returna a 400', async () => {
        const username = 'joesoap';
        await supertest(app).post(`/api/auth/register`);
      });
    });
  });
});
