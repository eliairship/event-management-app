import { EventsRoutes } from '../pages/Events';
import { ProtectedLayout } from '@/components/ProtectedLayout';

export const protectedRoutes = [
  {
    path: '/',
    element: <ProtectedLayout />,
    children: [{ path: '/events/*', element: <EventsRoutes /> }],
  },
];
