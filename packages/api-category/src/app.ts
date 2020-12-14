import 'reflect-metadata';
import { Environment, ExpressApplication } from '@localhost/express-application';
import { Router } from 'express';
// @ts-ignore
import { name } from '../package.json';

export class ApiCategoryApp extends ExpressApplication {
  constructor(environment: Environment, routes: Router[] = []) {
    super(environment, name);
    this.addRouters(routes);
  }
}
