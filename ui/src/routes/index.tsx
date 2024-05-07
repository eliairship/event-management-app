import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { useRoutes } from 'react-router-dom';
import LandingPage from '@/pages/Landing';
import { useAuth } from '@/context/AuthContext';

export const AppRoutes = () => {
  const { isLoggedIn } = useAuth();

  const commonRoutes = [{ path: '/', element: <LandingPage /> }];

  const routes = isLoggedIn ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
