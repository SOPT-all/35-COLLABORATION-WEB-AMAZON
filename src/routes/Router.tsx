import { createBrowserRouter } from 'react-router-dom';

import Search from '@pages/\bsearch/Search';
import Home from '@pages/home/Home';
import Layout from '@pages/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
      },
    ],
  },
]);

export default router;
