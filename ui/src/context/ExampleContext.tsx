import { ReactNode, createContext, useState } from 'react';

const initialState = {
  message: 'Example Context message',
  setNewMessage: () => {},
};

export const ExampleContext = createContext<{
  message: string;
  setNewMessage: (v: string) => void;
}>(initialState);

interface ContextType {
  children: ReactNode;
}
export function ExampleContextProvider({ children }: ContextType) {
  const [message, setMessage] = useState(initialState.message);
  function setNewMessage(value: string): void {
    setMessage(value);
  }
  return (
    <ExampleContext.Provider value={{ message, setNewMessage }}>
      {children}
    </ExampleContext.Provider>
  );
}
