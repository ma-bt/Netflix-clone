
import { lazy } from 'react';
const IndexPage = lazy(() => import('pages/Index'));
const HomeScreen = lazy(() => import('pages/HomeScreen'));


export const routes = [
  {
    path: '/',
    element: <HomeScreen />,
  },
  // {
  //   path: '/',
  //   element: <IndexPage />,
  // },
];

export default routes;
