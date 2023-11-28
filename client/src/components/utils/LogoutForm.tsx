import utils from '../../styles/Utils.module.css';

import { removeUser } from '../../utils/store';
import { useNavigate } from 'react-router-dom';

const LogoutForm = () => {
  const navigate = useNavigate(); 
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/logout', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (response) {
        removeUser();
        navigate('/');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={utils.form}>
      <button className={utils.btn} type="submit">
        Logout
      </button>
    </form>
  );
};

export default LogoutForm;
