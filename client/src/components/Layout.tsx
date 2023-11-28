import utils from '../styles/Utils.module.css';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div className={utils.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
