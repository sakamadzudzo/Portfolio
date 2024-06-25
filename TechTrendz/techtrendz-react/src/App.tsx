import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/Layout';
import Login from './pages/login';
import './assets/css/index.css';
import Examples from './pages/examples';
import Product from './pages/product';
import setAuthToken from './components/utils/setAuthToken';

function App() {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  
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
