import * as React from 'react';
import Home from './pages/home';
import { RouteConfig } from 'react-router-config';


const Hi = () => (
  <span>Hi</span>
);

const routes: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/algemene-voorwaarden',
    component: Hi
  }
];

export default routes;