import { json } from 'body-parser';
import { Application } from 'express';
import applyCors from './middlewares/cors';

/**
 * Add middlewares to an express application
 *
 * @param {express.Application} app
 * @returns {express.Application}
 */
const addMiddlewares = (app: Application): Application => {
  app.use(json());
  app.use(applyCors);

  return app;
};

export { addMiddlewares };
