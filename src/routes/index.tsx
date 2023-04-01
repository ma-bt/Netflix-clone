
import { lazy } from 'react';

const HomeScreen = lazy(() => import('pages/HomeScreen'));
const LoginScreen = lazy(() => import('pages/LoginScreen'));
const ProfileScreen = lazy(() => import('pages/ProfileScreen'));


export const routes = [
  {
    path: '/',
    element: <HomeScreen />,
  },
   {
     path: '/profile',
    element: <ProfileScreen />,
   },
];

export default routes;
