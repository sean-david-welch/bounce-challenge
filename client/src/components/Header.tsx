import utils from '../styles/Utils.module.css';
import styles from '../styles/Header.module.css';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link to="/">home</Link>
        </li>

        <img src="/logo.png" alt="Logo" className={utils.logo} />

        <li className={styles.navItem}>
          <Link to="/account">Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
