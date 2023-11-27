import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Loading from './components/Loading';

export default function AppRoutes() {
  const Home = lazy(() => import('./pages/Home'));
  const Account = lazy(() => import('./pages/Account'));

  const ScrollToTopPage = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Suspense fallback={<Loading />}>
      <ScrollToTopPage />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Suspense>
  );
}
