import { Application } from 'express';
import { rootRouter } from './routes/root';

/**
 * Setup routes for the express application.
 *
 * @param {Application} app
 */
const addRoutes = (app: Application): Application => {
  app.use(rootRouter);

  return app;
};

export { addRoutes };
