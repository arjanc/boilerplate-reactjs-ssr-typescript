import { Request } from 'express';
import * as React from "react";
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';
import Routes from './../../client/Routes';
import GlobalStyle from './../../client/GlobalStyle';

export default (req: Request) => {
  const sheet = new ServerStyleSheet();
  const content = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.path} context={{}}>
        <div>
          <GlobalStyle />
          {renderRoutes(Routes)}
        </div>
      </StaticRouter>
    )
  );
  const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet

  return`
    <html>
        <head>
            <title>Arjan Ceelen - Freelance Senior Front-end Developer</title>
            <meta charset="utf-8" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta name="description" content="Arjan Ceelen, creatieve front-end developer. 14 jaar ervaring. Freelance inzetbaar." />
            <meta name="keywords" content="ZZP, freelance, frontend, front-end, fronteer, defrontender, defrontenders, code, creatief, javascript, html,html5, css, css(3), css3, jQuery, BackboneJS, KnockoutJS, drempelvrij, toegankelijkheid, responsive, design, w3c, agile, scrum, php, ajax, wordpress, e-commerce, webshop, bibado, MVC, Sass, bootstrap, nodeJS, node, grunt, gulp, npm, expressjs, babel, ES6, ES2015, ES2017, ES2018, sockets, ReactJS, Angular, Vue, GraphQL, Redux, Saga, Jest, Jasmine, Unit tests, webpack, TypeScript, Agile, Scrum" />
            <meta name="author" content="Arjan Ceelen" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
           ${styles}
        </head>
        <body>
        <!--[if lt IE8]>
        <p>You are using an <strong>outdated</strong> browser. Please <a href="http://browserhappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
            <div id="root">${content}</div>
            <script src="bundle.js"></script>
        </body>
    </html>
  `;
};