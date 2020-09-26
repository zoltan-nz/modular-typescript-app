#!/usr/bin/env node

/**
 * Command line tool for creating an app, setting up routes, and launching a server.
 *
 * Options:
 * NODE_ENV='production' (default is 'development')
 * PORT=4100 (default is 3000)
 */
import errorhandler from 'errorhandler';
import listEndpoints from "express-list-endpoints";
import { env } from 'process';
import { addMiddlewares } from "../add-middlewares";
import { addRoutes } from '../add-routes';
import { createExpressApp } from "../create-express-app";
import { createExpressServer } from "../create-express-server";
import { Environment } from "../models/environment";

console.log('Express Typescript App. Start...\n');

const { NODE_ENV = 'development', PORT } = env;

const app = createExpressApp(NODE_ENV);

addMiddlewares(app);
addRoutes(app);

if (app.get('env') === Environment.development) {
  app.use(errorhandler())
  console.info(listEndpoints(app));
}

createExpressServer(app, PORT);
