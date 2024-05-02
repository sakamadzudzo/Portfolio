import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Layout from './components/Layout';
import Login from './pages/login';
import './assets/css/index.css';
import Examples from './pages/examples';
import { FetchConfig } from 'http-react';

function App() {
  return (
    <>
      <FetchConfig
        // baseUrl='localhost:3006/'
        // refresh={30}
        // headers={{ Authorization: 'Token' }}
        headers={{ "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept" }}
      >
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='examples' element={<Examples />} />
          </Route>
        </Routes>
      </FetchConfig>
    </>
  );
}

export default App;
