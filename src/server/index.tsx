import * as express from 'express';
import * as compression from 'compression';
// import {MatchedRoute, matchRoutes} from 'react-router-config';
// import Routes, { IRouteObject } from '../client/Routes';
import renderer from './helpers/renderer';

const app = express();
const port = 5001;

// interface IMatchedRoute extends MatchedRoute<any> {
//   route: IRouteObject;
// };

app.use(compression());

app.use(express.static('public'));

app.use((req, res) => {
  res.status(200);
  res.send(renderer(req));
  res.end();
});

/*
// Attempt UNO
// Dit was met een call naar een functie op elk component die de data ging ophalen.
// Daarvoor gaan de GraphQL gebruiken.
//
app.get('*', (req: express.Request, res: express.Response) => {

  matchRoutes(Routes, req.path).map(( { route }:IMatchedRoute ) => {
    route.loadData ? route.loadData() : null;
  });

  res.send(renderer(req));
});
*/


/*
// catch 404 and forward to error handler
app.use(function (req, res) {
  res.status(404).end('<h1>Oeps, page not found</h1>');
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res) {
    res.status(err.status).end('Something went wrong');
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res) {
  res.status(err.status).end('Something went wrong');
});
*/

app.listen(process.env.PORT || port, () => console.log(`Listening to port ${port}`));