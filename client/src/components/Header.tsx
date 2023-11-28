import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>

        <Link to="/account">
          <li>Account</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
