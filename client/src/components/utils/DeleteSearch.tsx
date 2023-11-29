import utils from '../../styles/Utils.module.css';

import { useState } from 'react';
import { Search } from '../../types/search';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DeleteButton: React.FC<{ search: Search }> = ({ search }) => {
  const searchId = search._id;
  const queryClient = useQueryClient();

  const [errorMessage, setErrorMessage] = useState('');

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`http://localhost:8080/api/searches/${searchId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userSearches'] });
    },

    onError: (error: any) => {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect id.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    deleteMutation.mutate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">
        <div className={utils.loginButton} role="button">
          <img src="/icons/trash.svg" alt="login-icon" />
        </div>
      </button>
      {errorMessage && <div className={utils.errorMessage}>{errorMessage}</div>}
    </form>
  );
};

export default DeleteButton;
