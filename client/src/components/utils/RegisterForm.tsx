import utils from '../../styles/Utils.module.css';

import { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: password,
          username: username,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result) {
        setEmail('');
        setPassword('');
        setPassword('');
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
      <form onSubmit={handleSubmit} className={utils.altForm}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onInput={e => {
            setUsername(e.currentTarget.value);
            setErrorMessage('');
          }}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onInput={e => {
            setEmail(e.currentTarget.value);
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
          Register User
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;