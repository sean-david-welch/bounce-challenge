import { atom } from 'nanostores';
import { User } from '../types/user';

export const $user = atom<User | null>(null);

export const addUser = (userData: User) => {
  console.log(userData);
  $user.set(userData);
};

export const removeUser = () => {
  $user.set(null);
};
