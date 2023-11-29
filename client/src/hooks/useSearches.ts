import { useState, useEffect } from 'react';
import { Search } from '../types/search';

const useUserSearches = (username: string) => {
  const [searches, setSearches] = useState<Search[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) return;

    const fetchSearches = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:8080/api/searches/${username}`, { credentials: 'include' });
        if (!response.ok) {
          throw new Error('Failed to fetch searches');
        }
        const data = await response.json();
        setSearches(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearches();
  }, [username]);

  return { searches, isLoading, error };
};

export default useUserSearches;
