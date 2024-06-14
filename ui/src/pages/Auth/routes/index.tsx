import { Route, Routes } from 'react-router-dom';
import { RegisterPage } from './Register';
import { LoginPage } from './Login';

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
