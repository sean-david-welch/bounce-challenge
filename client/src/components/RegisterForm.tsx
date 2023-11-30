import utils from '../styles/Utils.module.css';

import { useState } from 'react';

const RegisterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://bounce-express-server.onrender.com/api/auth/register', {
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
        setUsername('');
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
      <form onSubmit={handleSubmit} className={utils.regForm}>
        <h1>User Registration Form:</h1>

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
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
