/**
 * Command line tool for creating an app, setting up routes, and launching a server.
 *
 * Options:
 * NODE_ENV='production' (default is 'development')
 * PORT=4100 (default is 3000)
 */
import { ExpressApplication } from "@localhost/express-application";
import errorhandler from 'errorhandler';
import listEndpoints from 'express-list-endpoints';
import { env } from 'process';
import { Environment } from '../models/environment';

console.log('Express Typescript App. Start...\n');

const { NODE_ENV = 'production', PORT } = env;

const app = new ExpressApplication(NODE_ENV)

if (app. .get('env') === Environment.development) {
  app.use(errorhandler());
  console.info(listEndpoints(app));
}


