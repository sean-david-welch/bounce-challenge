import styles from '../styles/Footer.module.css';
import utils from '../styles/Utils.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src="/logo.png" alt="Logo" className={utils.logo} />
    </footer>
  );
};

export default Footer;
