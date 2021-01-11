import { Environment, ExpressApplication } from '@localhost/express-application';
import { autoInjectable } from 'tsyringe';
// @ts-ignore
import { name } from '../package.json';
import { CategoryController } from './category-controller';
import { Logger } from './services/logger';

@autoInjectable()
export class ApiCategoryApp extends ExpressApplication {
  constructor(environment: Environment, public logger?: Logger) {
    super(environment, name);
    this.logger?.log('hello');
    const controller = new CategoryController();
  }
}
