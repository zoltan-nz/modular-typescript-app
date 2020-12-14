import 'reflect-metadata';
import { Environment, ExpressApplication } from '@localhost/express-application';

import { Router } from 'express';
import { autoInjectable } from 'tsyringe';
// @ts-ignore
import { name } from '../package.json';
import { Logger } from './services/logger';

@autoInjectable()
export class ApiCategoryApp extends ExpressApplication {
  constructor(environment: Environment, public logger?: Logger) {
    super(environment, name);
    this.logger?.log('hello');
  }
}
