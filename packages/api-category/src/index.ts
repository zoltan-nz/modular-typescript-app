import { Environment, ExpressApplication } from '@localhost/express-application';
import { Router } from 'express';
import { env } from 'process';

const { NODE_ENV = Environment.production } = env;

const expressApplication = new ExpressApplication(NODE_ENV as Environment);

expressApplication.addRouters([Router().get('/', (req, res) => res.json('hello world'))]);
expressApplication.start();
