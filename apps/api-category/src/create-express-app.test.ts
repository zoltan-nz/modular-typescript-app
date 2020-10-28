import { createExpressApp } from './create-express-app';
import { Environment } from './models/environment';

describe('createExpressApp', () => {
  it('should create an express app', () => {
    const app = createExpressApp(Environment.development);
    expect(app).toBeDefined();
    expect(app.get('env')).toEqual('development');
  });

  it('should setup the environment variable', () => {
    const app = createExpressApp(Environment.production);
    expect(app.get('env')).toEqual('production');
  });

  it('should hide the x-powered-by header', () => {
    const app = createExpressApp(Environment.test);
    expect(app.get('x-powered-by')).toEqual(false);
  });

  it('should throw an error when non supported environment is used', () => {
    expect(() => {
      createExpressApp('not-supported-env');
    }).toThrow('NODE_ENV value is not supported, must have: test,development,staging,production');
  });
});
