import express from 'express';

import { getUserBySessionToken } from '../database/users';

export const isOwner = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
  try {
    const { id } = request.params;

    const currentUserId = response.locals.identity?._id ?? null;
    console.log(currentUserId);

    if (!currentUserId) return response.status(403);

    if (currentUserId.toString() !== id) return response.status(403);

    return next();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

export const isAuthenticated = async (
  request: express.Request,
  response: express.Response,
  next: express.NextFunction
) => {
  try {
    const sessionToken = request.cookies['SESSION'];

    if (!sessionToken) return response.sendStatus(403);

    const existingUser = await getUserBySessionToken(sessionToken);

    if (!existingUser) return response.sendStatus(403);

    response.locals.identity = existingUser;

    return next();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};
