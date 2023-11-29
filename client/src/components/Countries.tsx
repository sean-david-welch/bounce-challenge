import styles from '../styles/Home.module.css';

import { Country } from '../types/country';

interface CountriesProps {
  countries: Country[];
}

const Countries: React.FC<CountriesProps> = ({ countries }) => {
  console.log('countries in component', countries);

  return (
    <div className={styles.countries}>
      {countries.map(country => (
        <section key={country.cca2}>
          <h1>{`${country.name.common} - ${country.name.official}` || 'Unknown Country'}</h1>
          <div className={styles.country}>
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
                  {country.borders?.map((border, index) => (
                    <li key={index}>{border}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Countries;
