import { AuthRoutes } from '../pages/Auth';

export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
