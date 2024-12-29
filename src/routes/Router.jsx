import { createBrowserRouter } from 'react-router-dom';

import CardProduct from '../components/product/CardProduct';
import About from '../components/shopping/about/About';
import CardProductDetail from '../components/product/CardProductDetail';
import CardBasket from '../components/product/CardBasket';
import ContactPage from '../components/shopping/contact/ContactPage';

import NotFound from '../pages/NotFound';
import App from '../App';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />, 
    children: [
      { path: '/ecomshop', element: <CardProduct /> },
      { path: '/ecomshop/about', element: <About /> },
      { path: '/ecomshop/contact', element: <ContactPage /> },
      { path: '/ecomshop/product/:id', element: <CardProductDetail /> },
      { path: '/ecomshop/basket', element: <CardBasket /> },
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

