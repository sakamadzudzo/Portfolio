import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/Layout';
import Login from './pages/login';
import './assets/css/index.css';
import Examples from './pages/examples';
import { FetchConfig } from 'http-react';
import Product from './pages/product';

function App() {
  return (
    <>
      <FetchConfig
        baseUrl='http://localhost:3006/'
        // refresh={30}
        // headers={{ Authorization: 'Token' }}
        headers={{ "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" }}
      >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='examples' element={<Examples />} />
            <Route path='products' element={<Product />} />
          </Route>
        </Routes>
      </FetchConfig>
    </>
  );
}

export default App;
