import express from 'express';

import users from './users';
import countries from './countries';
import authentication from './authentication';
import search from './search';

const router = express.Router();

export default (): express.Router => {
  users(router);
  search(router);
  countries(router);
  authentication(router);

  return router;
};
