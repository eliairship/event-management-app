import { AppRoutes } from './routes';
import { Navbar } from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from './components/ui/toaster';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Navbar />
        <AppRoutes />
        <Toaster />
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
