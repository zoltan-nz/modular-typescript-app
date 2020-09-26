import { json } from 'body-parser';
import { Application } from 'express';

/**
 * Provide an express application with the given environment settings. Default environment is 'development'.
 *
 * @param {express.Application} app
 * @returns {express.Application}
 */
const addMiddlewares = (app: Application): Application => {
  app.use(json());

  return app;
};

export { addMiddlewares };
