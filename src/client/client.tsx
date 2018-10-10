import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import GlobalStyle from './GlobalStyle';


ReactDOM.hydrate(
  <BrowserRouter>
    <div>
      <GlobalStyle />
      {renderRoutes(Routes)}
    </div>
  </BrowserRouter>
  , document.querySelector('#root'));