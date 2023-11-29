import styles from '../styles/Footer.module.css';
import utils from '../styles/Utils.module.css';

import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

import { Link } from 'react-router-dom';
import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';

const Footer = () => {
  const user = useStore($user);

  return (
    <footer className={styles.footer}>
      <ul className={styles.footerList}>
        <li className={styles.footerItem}>
          <Link to={'/'}>
            <img src="/icons/home.svg" alt="home-icon" />
            Home
          </Link>
        </li>

        <Link to={'/'}>
          <img src="/logo.png" alt="Logo" className={utils.logo} />
        </Link>

        {user ? (
          <li className={styles.footerItem}>
            <Link to={'/account'}>
              <img src="/icons/user.svg" alt="user-icon" />
              Account
            </Link>
          </li>
        ) : (
          <li className={styles.footerItem}>
            <LoginForm />
          </li>
        )}
      </ul>
      <RegisterForm />
    </footer>
  );
};

export default Footer;
