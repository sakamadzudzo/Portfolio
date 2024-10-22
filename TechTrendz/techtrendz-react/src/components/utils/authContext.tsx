import React, { createContext, useContext, useState } from 'react';
import { Props, Role } from './../../types/types'

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  roles: Role[];
  setRoles: (roles: Role[]) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [roles, setRoles] = useState<Role[]>([] as Role[])

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, roles, setRoles }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
