import express from 'express';

import { createUser, getUserByEmail } from 'database/users';
import { random, authentication } from 'helpers';

export const register = async (request: express.Request, response: express.Response) => {
  try {
    const { email, password, username } = request.body;

    if (!email || !password || !username) response.status(400).send('Required Field is missing');

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
      return response.status(400).send('User Already exists, cannot process registration');
    }

    const salt = random();
    const user = await createUser({
      email,
      username,
      authentication: {
        salt,
        password: authentication(salt, password),
      },
    });

    return response.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};
