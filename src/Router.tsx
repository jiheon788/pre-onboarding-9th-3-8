import { Navigate, Route, Routes } from 'react-router-dom';
import Home from '@/pages/Home';

const Router = () => {
  return (
    <Routes>
      <Route path="/chart" element={<Home />} />
      <Route path="/*" element={<Navigate to="/chart" replace={true} />} />
    </Routes>
  );
};

export default Router;
