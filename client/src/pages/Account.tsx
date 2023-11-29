import styles from '../styles/Account.module.css';

import Layout from '../layouts/Layout';

import useUserSearches from '../hooks/useSearches';
import LogoutForm from '../components/LogoutForm';
import DeleteButton from '../components/DeleteSearch';

import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';

const Account = () => {
  const user = useStore($user);
  const { searches, isLoading, error } = useUserSearches(user?.username || '');

  return (
    <Layout>
      <LogoutForm />
      <div className={styles.account}>
        <h1>{user?.username}</h1>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}

        <div className={styles.recentSearches}>
          {searches &&
            searches.map(search => (
              <div>
                <h1 key={search._id}>{search.country}</h1>
                <img src={search.image} alt="country flag" />
                <DeleteButton search={search} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
};

export default Account;
