import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { loginWithEmailAndPassword } from '../api';
import storage from '@/utils/storage';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';

// TODO: Add zod and react-hook-form
export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    if (email && password) {
      const res = await loginWithEmailAndPassword({
        identifier: email,
        password,
      });
      const token = res.data.accessToken;
      if (token) {
        storage.setToken(token);
        setUserToken(token);
        return navigate('/events');
      }
      alert('Invalid Email & Password');
    }
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <form onSubmit={handleLogin}>
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                data-test-id="email-field"
                placeholder="m@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};
