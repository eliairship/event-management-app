import { useAuth } from '@/context/AuthContext';
import { Navigate, Outlet, Route, useLocation } from 'react-router-dom';

export const ProtectedLayout = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Route
        path="*"
        element={
          <Navigate to="/auth/login" state={{ from: location }} replace />
        }
      />
    );
  }

  return (
    <>
      <Outlet />
    </>
  );
};
