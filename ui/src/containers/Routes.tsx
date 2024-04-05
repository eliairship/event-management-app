import { Navigate, Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import NestedDetail from './NestedDetail';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/nested">
        <Route index element={<>Nested</>} />
        <Route path={':testId'} element={<NestedDetail />} />
      </Route>
      <Route path="/nottest" element={<>Not Test Route</>} />
      <Route path="/test" element={<>Test Route</>} />
      <Route path="*" element={<Navigate to="/test" />} />
    </ReactRouterRoutes>
  );
};
