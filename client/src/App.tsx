import AppRoutes from './Routes';
import styles from './styles/App.module.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.App}>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </QueryClientProvider>
  );
}

export default App;
