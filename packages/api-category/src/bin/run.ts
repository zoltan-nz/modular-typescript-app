
/**
 * Command line tool for creating an app, setting up routes, and launching a server.
 *
 * Options:
 * NODE_ENV='production' (default is 'development')
 * PORT=4100 (default is 3000)
 */
import errorhandler from 'errorhandler';
import listEndpoints from 'express-list-endpoints';
import { env } from 'process';
import { createExpressApp } from '@my-org/create-express-app';
import { addMiddlewares } from '../add-middlewares';
import { addRoutes } from '../add-routes';
import { launchExpressServer } from '../launch-express-server';
import { Environment } from '../models/environment';

console.log('Express Typescript App. Start...\n');

const { NODE_ENV = 'development', PORT } = env;

const app = createExpressApp(NODE_ENV);

addMiddlewares(app);
addRoutes(app);

if (app.get('env') === Environment.development) {
  app.use(errorhandler());
  console.info(listEndpoints(app));
}

launchExpressServer(app, PORT);
