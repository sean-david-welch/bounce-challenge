import utils from '../styles/Utils.module.css';
import styles from '../styles/Header.module.css';

import LoginForm from './utils/LoginForm';

import { Link } from 'react-router-dom';
import { $user } from '../utils/store';
import { useStore } from '@nanostores/react';

const Header = () => {
  const user = useStore($user);

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to={'/'}>
            <img src="/icons/home.svg" alt="home-icon" />
            Home
          </Link>
        </li>

        <Link to={'/'}>
          <img src="/logo.png" alt="Logo" className={utils.logo} />
        </Link>

        {user ? (
          <li className={styles.navItem}>
            <Link to={'/account'}>
              <img src="/icons/user.svg" alt="user-icon" />
              {`Account - ${user.username}`}
            </Link>
          </li>
        ) : (
          <li className={styles.navItem}>
            <LoginForm />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Header;
