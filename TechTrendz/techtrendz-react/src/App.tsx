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
import { Product } from './pages/product';
import { NotFound } from './pages/404';
import { Cart } from './pages/cart';
import { BrandEdit } from './pages/brandEdit';
import { ContactTypeEdit } from './pages/contactTypeEdit';
import { OrderStatusEdit } from './pages/orderStatusEdit';
import { ProductTypeEdit } from './pages/productTypeEdit';
import { ProductStatusEdit } from './pages/productStatusEdit';
import { RoleEdit } from './pages/roleEdit';

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
              <Route path='product/:id' element={<Product />} />
              <Route path='cart' element={<Cart />} />
              <Route path='brandedit/:id?' element={<BrandEdit />} />
              <Route path='contacttypeedit/:id?' element={<ContactTypeEdit />} />
              <Route path='orderstatusedit/:id?' element={<OrderStatusEdit />} />
              <Route path='producttypeedit/:id?' element={<ProductTypeEdit />} />
              <Route path='productstatusedit/:id?' element={<ProductStatusEdit />} />
              <Route path='roleedit/:id?' element={<RoleEdit />} />
              <Route path='*' element={<NotFound />} />
            </Route>
          </Routes>
        </RouteGuard>
      </AuthProvider>
    </>
  );
}

export default App;
