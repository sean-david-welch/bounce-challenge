import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

export default function AppRoutes() {
  const Account = lazy(() => import('./Account'));

  const ScrollToTopPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <>
      <ScrollToTopPage />
      <Routes>
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
