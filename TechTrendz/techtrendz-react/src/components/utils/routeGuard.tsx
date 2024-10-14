import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { checkAuth } from './../service/authService';
import { useDispatch, useSelector } from 'react-redux';
import { AuthState, setReferer } from './authSlice';
import { Props } from '../../types/types';

const RouteGuard: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate()
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")

  useEffect(() => {
    const checkAuthentication = async () => {
      const isAuth = await checkAuth(token!);
      if (!isAuth && !['/login', '/about'].includes(location.pathname)) {
        dispatch(setReferer(location.pathname))
        navigate('/login');
      }
    };

    if (!['/login', '/about'].includes(location.pathname)) {
      checkAuthentication();
    }
  }, [location.pathname, token, navigate, dispatch]);

  return <>{children}</>;
};

export default RouteGuard;
