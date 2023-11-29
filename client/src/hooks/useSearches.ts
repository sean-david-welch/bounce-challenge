import { useQuery } from '@tanstack/react-query';
import { Search } from '../types/search';

const fetchUserSearches = async (username: string): Promise<Search[]> => {
  const response = await fetch(`https://bounce-express-server.onrender.com/api/searches/${username}`, {
    credentials: 'include',
  });
  if (!response.ok) {
    throw new Error('Failed to fetch searches');
  }
  return response.json();
};

const useUserSearches = (username: string) => {
  const queryKey = ['userSearches'];
  const queryFunction = () => fetchUserSearches(username);

  const {
    data: searches,
    isLoading,
    error,
  } = useQuery<Search[], Error>({ queryKey: queryKey, queryFn: queryFunction });

  return { searches, isLoading, error };
};

export default useUserSearches;
