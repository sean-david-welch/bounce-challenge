import express from 'express';

import { getAllSearches, addSearch, deleteSearch } from '../controllers/search';
import { isAuthenticated } from '../middleware/index';

export default (router: express.Router) => {
  router.post('/searches', isAuthenticated, addSearch);
  router.get('/searches/:username', isAuthenticated, getAllSearches);
  router.delete('/searches/:id', isAuthenticated, deleteSearch);
};
