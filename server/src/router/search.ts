import express from 'express';

import { getAllSearches, addSearch } from '../controllers/search';
import { isAuthenticated, isOwner } from '../middleware/index';

export default (router: express.Router) => {
  router.post('/searches', isAuthenticated, addSearch);
  router.get('/searches/:username', isAuthenticated, getAllSearches);
  router.delete('/searches/:id', isAuthenticated, getAllSearches);
};
