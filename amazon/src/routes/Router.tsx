import { createBrowserRouter } from 'react-router-dom';

import Search from '@pages/\bsearch/Search';

import Dev from '../pages/Dev/Dev';
import Home from '../pages/home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dev',
    element: <Dev />,
  },
  {
    path: '/search',
    element: <Search />,
  },
]);

export default router;
