import { createBrowserRouter } from 'react-router-dom';

import Dev from '../pages/Dev/Dev';
import Home from '../pages/home/Home';
import SearchResult from '../pages/searchResult/SearchResult';

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
    path: '/searchResult',
    element: <SearchResult />,
  },
]);

export default router;
