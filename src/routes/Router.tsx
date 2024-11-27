import { createBrowserRouter } from 'react-router-dom';

import Search from '@pages/\bsearch/Search';
import Dev from '@pages/Dev/Dev';
import Home from '@pages/home/Home';
import Layout from '@pages/Layout/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/dev',
        element: <Dev />,
      },
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
