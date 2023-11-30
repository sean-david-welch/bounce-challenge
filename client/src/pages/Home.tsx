import Layout from '../layouts/Layout';
import Countries from '../components/Countries';
import CountryForm from '../components/CountryForm';
import RegisterForm from '../components/RegisterForm';

import { useState } from 'react';
import { Country } from '../types/country';

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  const handleCountrySubmit = (data: Country[]) => {
    setCountries(currentCountries => [...currentCountries, ...data]);
  };

  return (
    <Layout>
      <CountryForm onCountrySubmit={handleCountrySubmit} />
      {countries && <Countries countries={countries} />}
      <RegisterForm />
    </Layout>
  );
};

export default Home;
