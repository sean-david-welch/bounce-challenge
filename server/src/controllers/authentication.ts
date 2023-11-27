import express from 'express';

import { createUser, getUserByEmail } from '../database/users';
import { random, authentication } from '../helpers/index';

export const login = async (request: express.Request, response: express.Response) => {
  try {
    const { email, password } = request.body;

    if (!email || !password) response.status(400).send('Required Field is missing');

    const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');

    if (!user) {
      return response.status(400).send('No User found - Email or Password were incorrect');
    }

    const expectedHash = authentication(user.authentication.salt, password);

    if (user.authentication.password !== expectedHash)
      return response.status(403).send('Password is not correct - try again');

    const salt = random();

    user.authentication.sessionToken = authentication(salt, user._id.toString());

    await user.save();

    response.cookie('SESSION', user.authentication.sessionToken, { domain: 'localhost', path: '/' });

    return response.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

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
