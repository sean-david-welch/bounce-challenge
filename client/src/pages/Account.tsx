import styles from '../styles/Account.module.css';

import Layout from '../layouts/Layout';
import Countries from '../components/Countries';

import useUserSearches from '../hooks/useSearches';
import LogoutForm from '../components/LogoutForm';
import DeleteButton from '../components/DeleteSearch';

import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';

const Account = () => {
  const user = useStore($user);
  const { searches, isLoading, error } = useUserSearches(user?.username || '');

  const countries = searches ? searches.map(search => search.country) : [];
  console.log('countries in account', countries);

  return (
    <Layout>
      <LogoutForm />
      <div className={styles.account}>
        <h1>{user?.username}</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        <div className={styles.recentSearches}>{countries && <Countries countries={countries} />}</div>
      </div>
    </Layout>
  );
};

export default Account;
