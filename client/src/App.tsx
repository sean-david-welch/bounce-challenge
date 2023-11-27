import styles from './styles/App.module.css';

import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './Routes';

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <AppRoutes />
      </Router>
    </div>
  );
}

export default App;
