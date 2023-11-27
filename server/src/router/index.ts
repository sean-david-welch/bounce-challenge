import express from 'express';

import users from './users';
import countries from './countries';
import authentication from './authentication';

const router = express.Router();

export default (): express.Router => {
  users(router);
  countries(router);
  authentication(router);

  return router;
};
