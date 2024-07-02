import { Route, Routes, matchPath, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/Layout';
import Login from './pages/login';
import './assets/css/index.css';
import Examples from './pages/examples';
import Product from './pages/product';
import setAuthToken from './components/utils/setAuthToken';
import { useDispatch, useSelector } from 'react-redux';
import API from './components/utils/constants';
import axios from 'axios';
import { AuthState, clearToken, clearUser, setReferer, setUser } from './components/utils/authSlice';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state: AuthState) => state.auth ? state.auth.token : "")
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const isLogin = matchPath("/login", pathname) !== null
  const referer = useSelector((state: AuthState) => state.auth ? state.auth.referer : "/")
  const [loaded, setLoaded] = useState(false)
  const params = referer ? new URLSearchParams(referer) : null
  const param = params ? parseInt(params.get("authenticated")!) : null
  // const param = null

  console.log(referer)

  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  const getPrincipal = useCallback(async () => {
    // if (!isLogin) {
    //   dispatch(setReferer(pathname))
    // }
    if (!isLogin || !param) {
      if (token !== "") {
        await axios.get(API + "getprincipal", {
          headers: {
            Authorization: token
          }
        })
          .then((response) => {
            dispatch(setUser(response.data));
            console.clear();
            if (isLogin) {
              navigate(referer!)
            }
          })
          .catch((error) => {
            // console.error(error);
            if (error.response.data.error === "Unauthorized") {
              if (!isLogin) {
                dispatch(setReferer(pathname + "?authenticated=0"))
                navigate("/login")
              }
            }
            toast.error(error.response.data.error)
            if (error.response.data.error.includes("The Token has expired")) {
              dispatch(clearToken())
              dispatch(clearUser())
              if (!isLogin) {
                dispatch(setReferer(pathname + "?authenticated=0"))
                navigate("/login")
              }
            }
          }
          );
      }
    }
  }, [param, token, dispatch, isLogin, navigate, referer, pathname])

  useEffect(() => {
    if (pathname) { }
    getPrincipal()
  }, [getPrincipal, pathname])

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='examples' element={<Examples />} />
          <Route path='products' element={<Product />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
