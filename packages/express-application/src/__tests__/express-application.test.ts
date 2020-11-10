import { ExpressApplication } from '../express-application';
import { Environment } from '../models/environment';

describe('Express Application', () => {
  it('should create an Express app', () => {
    const app = new ExpressApplication(Environment.development);
    expect(app).toBeDefined();
    expect(app.expressApp.get('env')).toEqual('development');
  });

  it('should setup the environment variable', () => {
    const app = new ExpressApplication(Environment.production);
    expect(app.expressApp.get('env')).toEqual('production');
  });

  it('should hide the x-powered-by header', () => {
    const app = new ExpressApplication(Environment.test);
    expect(app.expressApp.get('x-powered-by')).toEqual(false);
  });

  it('should throw an error when non supported environment is used', () => {
    expect(() => {
      new ExpressApplication('not-supported-env' as Environment);
    }).toThrow('NODE_ENV value is not supported, must have: test,development,staging,production');
  });
});
