import { Route, Routes, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const ChartPage = lazy(() => import('@/pages/ChartPage'));

const Router = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<>Loading...</>}>
            <ChartPage />
          </Suspense>
        }
      />
      <Route path="/*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};

export default Router;
