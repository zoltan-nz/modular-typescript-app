import { Application } from 'express';
// import parserRoute from './routes/parser';
import rootRoute from './routes/root';

/**
 * Setup routes for the express application.
 *
 * @param {Application} app
 */
export default function(app: Application) {
  app.use('/', rootRoute);
  // app.use('/api/parser', parserRoute);
}
