import Layout from '../components/Layout';
import useFetchCountries from '../hooks/fetchCountries';
import { Country } from '../types/country';

const Home = () => {
  const { countries, isLoading, error } = useFetchCountries();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Layout>
      <ul>
        {countries.map((country: Country) => (
          <li key={country?.cca2}>{country.name.common}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
