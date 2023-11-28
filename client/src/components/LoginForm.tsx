import FormDialog from './FormDialog';

import { useState, useEffect } from 'react';

const LoginForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <FormDialog visible={showForm} onClose={() => setShowForm(false)}>
      <h1>Form</h1>
    </FormDialog>
  );
};

export default LoginForm;
