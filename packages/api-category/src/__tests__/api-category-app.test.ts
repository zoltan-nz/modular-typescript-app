import { Environment } from '@localhost/express-application';
import { ApiCategoryApp } from '../app';

describe('ApiCategoryApp', () => {
  it('is exists', async () => {
    const app = new ApiCategoryApp(Environment.test);
    expect(app).toBeDefined();
  });
});
