import { json } from 'body-parser';
import { Application } from 'express';

/**
 * Add middlewares to an express application
 *
 * @param {express.Application} app
 * @returns {express.Application}
 */
const addMiddlewares = (app: Application): Application => {
  app.use(json());

  return app;
};

export { addMiddlewares };
