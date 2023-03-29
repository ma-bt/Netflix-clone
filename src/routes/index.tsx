
import { lazy } from 'react';
const IndexPage = lazy(() => import('pages/Index'));
const HomeScreen = lazy(() => import('pages/HomeScreen'));
const LoginScreen = lazy(() => import('pages/LoginScreen'));


export const routes = [
  // {
  //   path: '/',
  //   element: <HomeScreen />,
  // },
   {
     path: '/',
    element: <LoginScreen />,
   },
];

export default routes;
