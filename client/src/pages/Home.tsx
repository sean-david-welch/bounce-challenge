import Layout from '../components/Layout';
import CountryForm from '../components/utils/CountryForm';

import { useState, useEffect } from 'react';
import { Country } from '../types/country';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const handleCountrySubmit = (data: Country[]) => {
    setCountries(currentCountries => [...currentCountries, ...data]);
  };

  useEffect(() => {
    console.log('Updated countries:', countries);
  }, [countries]);

  return (
    <Layout>
      <CountryForm onCountrySubmit={handleCountrySubmit} />
      {countries && (
        <ul>
          {countries.map((country: Country) => (
            <li key={country?.cca2}>{country?.name?.common || 'Unknown Country'}</li>
          ))}
        </ul>
      )}
    </Layout>
  );
};

export default Home;
