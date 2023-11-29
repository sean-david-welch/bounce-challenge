import utils from '../styles/Utils.module.css';

import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DeleteButton: React.FC<{ searchId: string }> = ({ searchId }) => {
  const queryClient = useQueryClient();

  const [errorMessage, setErrorMessage] = useState('');

  const deleteMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch(`https://bounce-express-server.onrender.com/api/searches/${searchId}`, {
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
      <button type="submit" className={utils.btn}>
        Delete Model
      </button>
      {errorMessage && <div className={utils.errorMessage}>{errorMessage}</div>}
    </form>
  );
};

export default DeleteButton;
