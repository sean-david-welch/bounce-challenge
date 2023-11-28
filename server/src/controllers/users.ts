import express from 'express';

import { delteUserById, getUserById, getUsers } from '../database/users';

export const getAllUsers = async (request: express.Request, response: express.Response) => {
  try {
    const users = await getUsers();

    return response.status(200).json(users);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

export const deleteUser = async (request: express.Request, response: express.Response) => {
  try {
    const { id } = request.params;

    if (!id) return response.status(400).send('No Id present in request');

    const deletedUser = await delteUserById(id);

    return response.status(200).json(deletedUser);
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};

export const updateUser = async (request: express.Request, response: express.Response) => {
  try {
    const { id } = request.params;
    const { username } = request.body;

    if (!username) return response.sendStatus(400);

    const user = await getUserById(id);

    user.username = username;

    await user.save();

    return response.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return response.sendStatus(400);
  }
};