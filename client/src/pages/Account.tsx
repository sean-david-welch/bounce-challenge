import styles from '../styles/Account.module.css';

import Layout from '../components/Layout';

import LogoutForm from '../components/utils/LogoutForm';

import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';

const Account = () => {
  const user = useStore($user);

  return (
    <Layout>
      <LogoutForm />
      <div className={styles.account}>
        <h1>{user?.username}</h1>
      </div>
    </Layout>
  );
};

export default Account;
