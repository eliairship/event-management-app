import { AppRoutes } from './routes';
import { Navbar } from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <AppRoutes />
    </AuthContextProvider>
  );
}

export default App;
