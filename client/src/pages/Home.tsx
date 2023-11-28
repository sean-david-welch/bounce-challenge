import styles from '../styles/Home.module.css';

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
        <div className={styles.countries}>
          {countries.map(country => (
            <>
              <h1>{`${country.name.common} - ${country.name.official}` || 'Unknown Country'}</h1>

              <div key={country.cca2} className={styles.country}>
                <img src={country.flags.png} alt={country.flags.alt} />

                <div className={styles.information}>
                  <div className={styles.details}>
                    <h2>{`Capital City: ${country.capital[0]}` || 'No Capital'}</h2>
                    <h2>{`UN Member: ${country.unMember}` || false}</h2>
                    <h2>{`Population: ${country.population}`}</h2>
                    <h2>{`Region: ${country.region}`}</h2>
                    <h2>{`Fifa Acronym: ${country.fifa}`}</h2>
                    <h2>{`Continent: ${country.continents}`}</h2>
                  </div>
                  <div className={styles.details}>
                    <h3>Bordering Nation:</h3>
                    <ul>
                      {Object.values(country.borders).map((country, index) => (
                        <li key={index}>{country}</li>
                      ))}
                    </ul>
                  </div>
                  <div className={styles.details}>
                    <h3>Currencies:</h3>
                    <ul>
                      {Object.entries(country.currencies).map(([code]) => (
                        <li key={code}>{`${code}`}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.details}>
                    <h3>Languages:</h3>
                    <ul className={styles.details}>
                      {Object.values(country.languages).map((language, index) => (
                        <li key={index}>{language}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
