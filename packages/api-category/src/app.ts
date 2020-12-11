import { Environment, ExpressApplication } from '@localhost/express-application';
import { Router } from 'express';

export class ApiCategoryApp extends ExpressApplication {
  constructor(environment: Environment, routes: Router[] = []) {
    super(environment);
    this.addRouters(routes);
  }
}
