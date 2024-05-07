import { Route, Routes } from 'react-router-dom';
import { EventsPage } from './Events';

export const EventsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<EventsPage />} />
    </Routes>
  );
};
