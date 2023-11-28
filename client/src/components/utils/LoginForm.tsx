import FormDialog from './FormDialog';

import utils from '../../styles/Utils.module.css';

import { useState } from 'react';

const LoginForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result.ok) {
        setEmail('');
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
      <button className={utils.btnForm} onClick={() => setShowForm(!showForm)}>
        Login
      </button>
      <FormDialog visible={showForm} onClose={() => setShowForm(false)}>
        <form onSubmit={handleSubmit} className={utils.form}>
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
          <button type="submit">Login</button>
        </form>
      </FormDialog>
    </section>
  );
};

export default LoginForm;
