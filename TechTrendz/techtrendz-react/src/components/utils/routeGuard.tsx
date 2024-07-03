import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './authContext';
import { getPrincipal } from './authService';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, setReferer } from './authSlice';
import { Props } from '../../types/types';

const RouteGuard: React.FC<Props> = ({ children }) => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuth = await getPrincipal(token!);
      setIsAuthenticated(!!isAuth);
      if (!isAuth && location.pathname !== '/login') {
        dispatch(setReferer(location.pathname))
        navigate('/login');
      }
    };

    if (location.pathname !== '/login') {
      checkAuthentication();
    }
  }, [location.pathname, setIsAuthenticated, token, navigate, dispatch]);

  return <>{children}</>;
};

export default RouteGuard;
