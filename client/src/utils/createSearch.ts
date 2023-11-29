import { Country } from '../types/country';
import { User } from '../types/user';

export const postSearch = async (country: Country, user: User) => {
  try {
    const { name, flags } = country;
    const { common } = name;
    const { png } = flags;
    const { _id } = user;

    const response = await fetch('http://localhost:8080/api/searches', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({ common, png, _id }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (e) {
    console.error('Error posting country:', e);
  }
};
