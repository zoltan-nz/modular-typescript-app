import { Application } from 'express';
import { rootRouter } from './routes/root';
import { usersRouter } from './routes/users';

/**
 * Setup routes for the express application.
 *
 * @param {Application} app
 */
const addRoutes = (app: Application): Application => {
  app.use(rootRouter);
  app.use(usersRouter);

  return app;
};

export { addRoutes };
