import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
  , document.querySelector('#root'));