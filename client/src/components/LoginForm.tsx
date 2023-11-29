import FormDialog from './FormDialog';

import utils from '../styles/Utils.module.css';

import { useState } from 'react';
import { addUser } from '../utils/store';

const LoginForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://bounce-express-server.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          identifier: identifier,
          password: password,
        }),
      });
      console.log('response', response);

      const result = await response.json();
      console.log('result', result);

      if (result) {
        setIdentifier('');
        setPassword('');
        setShowForm(false);

        addUser(result);
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setErrorMessage('Incorrect email or password.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }

      if (error instanceof Error) {
        console.error('Error submitting form:', error.message);
      }
    }
  };

  return (
    <section id="form">
      <div className={utils.loginButton} role="button" onClick={() => setShowForm(!showForm)}>
        <img src="/icons/login.svg" alt="login-icon" />
        Login
      </div>

      <FormDialog visible={showForm} onClose={() => setShowForm(false)}>
        <form onSubmit={handleSubmit} className={utils.form}>
          <label>Email/Username:</label>
          <input
            type="text"
            value={identifier}
            onInput={e => {
              setIdentifier(e.currentTarget.value);
              setErrorMessage('');
            }}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onInput={e => {
              setPassword(e.currentTarget.value);
              setErrorMessage('');
            }}
            required
          />

          {errorMessage && <div className={utils.errorMessage}>{errorMessage}</div>}
          <button className={utils.btn} type="submit">
            Login
          </button>
        </form>
      </FormDialog>
    </section>
  );
};

export default LoginForm;
