import utils from '../../styles/Utils.module.css';

import { useState } from 'react';
import { Country } from '../../types/country';

interface CountryFormProps {
  onCountrySubmit: (data: Country[]) => void;
}

const CountryForm: React.FC<CountryFormProps> = ({ onCountrySubmit }) => {
  const [country, setCountry] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/countries/${country}`);

      if (!response.ok) {
        throw new Error('Country fetch failed');
      }

      const data = await response.json();
      console.log('Country Data:', data);

      onCountrySubmit(data);
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
        <label>Country Name:</label>
        <input
          type="text"
          value={country}
          onInput={e => {
            setCountry(e.currentTarget.value);
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

export default CountryForm;
