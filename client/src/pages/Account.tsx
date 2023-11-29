import styles from '../styles/Account.module.css';

import Layout from '../layouts/Layout';
import Countries from '../components/Countries';

import useUserSearches from '../hooks/useSearches';
import LogoutForm from '../components/LogoutForm';

import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';
import LoginForm from '../components/LoginForm';

const Account = () => {
  const user = useStore($user);
  const { searches, isLoading, error } = useUserSearches(user?.username || '');

  const countries = searches ? searches.map(search => search.country) : [];
  const searchId = searches ? searches.map(search => search._id) : [];
  console.log('countries in account', countries);

  return (
    <Layout>
      {user ? (
        <>
          <div className={styles.account}>
            <h1>Account Details:</h1>
            <h1>Username: {user?.username}</h1>
            <h1>Email: {user?.email}</h1>
            <LogoutForm />

            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error.message}</p>}
          </div>
          {countries && <Countries countries={countries} searchId={searchId} />}
        </>
      ) : (
        <LoginForm />
      )}
    </Layout>
  );
};

export default Account;
