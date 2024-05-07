import storage from '@/utils/storage';
import { User } from '@/utils/types';
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { jwtDecode } from 'jwt-decode';

interface IAuthContext {
  isLoggedIn: boolean;
  user: User | null;
  logOut: () => void;
  setUserToken: (accessToken: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

interface ContextType {
  children: ReactNode;
}
export function AuthContextProvider({ children }: ContextType) {
  const [user, setUser] = useState<User | null>(null);
  const isLoggedIn = Boolean(user);

  const token = storage.getToken();

  const setUserToken = (accessToken: string) => {
    const decoded = jwtDecode(accessToken);
    if (decoded.sub && decoded.exp) {
      if (Date.now() >= decoded.exp * 1000) {
        storage.clearToken();
        setUser(null);
        return;
      }
      return setUser({ id: decoded.sub });
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    if (token) setUserToken(token);
  }, [token]);

  function logOut() {
    setUser(null);
    storage.clearToken();
  }
  return (
    <AuthContext.Provider value={{ isLoggedIn, user, logOut, setUserToken }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuth has to be used within <AuthContext.Provider>');
  }

  return authContext;
};
