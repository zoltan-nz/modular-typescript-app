import * as express from 'express';

export default function(): express.Application {
  const app: express.Application = express();

  return app;
}
