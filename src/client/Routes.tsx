import * as React from 'react';
import Home from './components/Home';
import { RouteConfig } from 'react-router-config';
// import { Route } from 'react-router-dom';


const Hi = () => (
  <span>Hi</span>
);

// export interface IRouteObject {
//   loadData?: () => void;
//   path?: string;
//   component?: any | {};
//   exact?: boolean;
// }
// export interface IRouteObject extends RouteConfig {
//   loadData?: () => void;
// };

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