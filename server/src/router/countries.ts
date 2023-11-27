import express from 'express';

import { getCountryInfo } from '../controllers/countries';

export default (router: express.Router) => {
  router.get('/countries/:country', getCountryInfo);
};
