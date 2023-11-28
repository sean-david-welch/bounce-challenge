import express from 'express';

import { login, logout, register } from '../controllers/authentication';

export default (router: express.Router) => {
  router.post('/auth/login', login);
  router.get('/auth/logout', logout);
  router.post('/auth/register', register);
};
