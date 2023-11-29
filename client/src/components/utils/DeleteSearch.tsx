import utils from '../../styles/Utils.module.css';

import { useState } from 'react';
import { Search } from '../../types/search';

const DeleteButton: React.FC<{ search: Search }> = ({ search }) => {
  const searchId = search._id;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/searches/${searchId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });
      console.log('response', response);

      const result = await response.json();
      console.log('result', result);

      if (result) {
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect id.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }

      if (error instanceof Error) {
        console.error('Error submitting form:', error.message);
      }
    }
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
