import { createBrowserRouter } from 'react-router-dom';

import CardProduct from '../components/product/CardProduct';
import About from '../components/About';
import CardProductDetail from '../components/product/CardProductDetail';
import CardBasket from '../components/product/CardBasket';
import NotFound from '../pages/NotFound';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { path: '/ecomshop', element: <CardProduct /> },
      { path: '/about', element: <About /> },
      { path: '/product/:id', element: <CardProductDetail /> },
      { path: '/basket', element: <CardBasket /> },
      { path: '*', element: <NotFound /> },
    ],
  },
  {
    future: {
      v7_fetcherPersist: true, 
    },
  }
]);

export default routes;

