import express, { Express } from 'express';
import { Environment } from './models/environment';

/**
 *
 * @param {string} environment
 */
const createExpressApp = (environment: string): Express => {
  if (!Object.keys(Environment).includes(environment)) {
    throw Error(`NODE_ENV value is not supported, must have: ${Object.keys(Environment)}`);
  }

  const app = express();

  app.set('env', environment);
  app.disable('x-powered-by');

  return app;
};

export { createExpressApp };
