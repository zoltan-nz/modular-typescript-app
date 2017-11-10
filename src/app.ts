import { json, urlencoded } from 'body-parser';
import * as express from 'express';
import * as morgan from 'morgan';

export default function(env: string = 'development'): express.Application {
  const app: express.Application = express();

  if (env !== 'test') app.use(morgan('dev'));

  app.use(json());
  app.use(urlencoded({ extended: false }));

  return app;
}
