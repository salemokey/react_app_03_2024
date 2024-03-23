import { createBrowserRouter } from 'react-router-dom';
import { Root } from '../features/core/Root';
import { ArticlePage } from '../pages/ArticlePage';
import { FreshPage } from '../pages/FreshPage';
import { PopularPage } from '../pages/PopularPage';
import { ROUTES } from './routes';

export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Root />,
    children: [
      {
        index: true,
        element: <PopularPage />,
      },
      {
        path: ROUTES.FRESH,
        element: <FreshPage />,
      },
      {
        path: `${ROUTES.ARTICLE}/:id`,
        element: <ArticlePage />,
      },
    ],
  },
  // {
  //   path: '/',
  //   element: <PopularPage />,
  // },
  // {
  //   path: '/fresh',
  //   element: <FreshPage />,
  // },
]);
