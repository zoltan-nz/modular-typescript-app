import { controller, get } from './decorators/controller';

@controller()
export class CategoryController {
  @get('/')
  async index() {
    return 'get all categories';
  }
}
