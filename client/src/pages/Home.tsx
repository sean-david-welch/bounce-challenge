import Layout from '../layouts/Layout';
import Countries from '../components/Countries';
import CountryForm from '../components/CountryForm';

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
    </Layout>
  );
};

export default Home;
2222;
