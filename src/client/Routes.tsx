import * as React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';

const Hi = () => (
  <span>Hi</span>
);

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/algemene-voorwaarden" component={Hi} />
    </div>
  );
};