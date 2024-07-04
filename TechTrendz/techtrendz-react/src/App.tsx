import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/Layout';
import Login from './pages/login';
import './assets/css/index.css';
import Examples from './pages/examples';
import Products from './pages/products';
import setAuthToken from './components/utils/setAuthToken';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './components/utils/authContext';
import RouteGuard from './components/utils/routeGuard';

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  return (
    <>
      <AuthProvider>
        <RouteGuard>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />} />
              <Route path='examples' element={<Examples />} />
              <Route path='products' element={<Products />} />
            </Route>
          </Routes>
        </RouteGuard>
      </AuthProvider>
    </>
  );
}

export default App;
