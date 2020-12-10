import { Router } from 'express';
import listEndpoints from 'express-list-endpoints';
import request from 'supertest';
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
      const env: Environment = 'not-supported-env' as Environment;
      new ExpressApplication(env);
    }).toThrow('NODE_ENV value is not supported, must have: test,development,staging,production');
  });

  test('expressApp can parse json body', async () => {
    const app = new ExpressApplication(Environment.test);
    app.expressApp.post('/', (req, res) => res.json(req.body));

    const response = await request(app.expressApp).post('/').send({ dummy: 'test object' });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({ dummy: 'test object' });
  });

  test('routers', () => {
    const router1 = Router();
    const router2 = Router();

    router1.get('/test1', jest.fn());
    router2.post('/test2', jest.fn());

    const app = new ExpressApplication(Environment.test);
    app.addRouters([router1, router2]);

    expect(listEndpoints(app.expressApp)).toEqual([
      {
        methods: ['GET'],
        middlewares: ['mockConstructor'],
        path: '/test1',
      },
      {
        methods: ['POST'],
        middlewares: ['mockConstructor'],
        path: '/test2',
      },
    ]);
  });
});
