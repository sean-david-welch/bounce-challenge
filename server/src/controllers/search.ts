import express from 'express';

import { getSearchByUser, createSearch, deleteSearchById } from '../database/search';

export const getAllSearches = async (request: express.Request, response: express.Response) => {
  try {
    const { username } = request.params;

    const searches = await getSearchByUser(username);

    return response.status(200).json(searches);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

export const addSearch = async (request: express.Request, response: express.Response) => {
  try {
    const { country, _id } = request.body;

    const search = await createSearch({ ...country, user: _id });

    return response.status(200).json(search).end();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

export const deleteSearch = async (request: express.Request, response: express.Response) => {
  try {
    const { id } = request.params;

    if (!id) return response.status(400).send('No Id present in request');

    const deletedSearch = await deleteSearchById(id);

    return response.status(200).json(deletedSearch);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};
