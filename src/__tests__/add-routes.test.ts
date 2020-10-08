import express from 'express';
import listEndpoints from 'express-list-endpoints';
import { addRoutes } from '../add-routes';

describe('addRoutes', () => {
  test('routes', () => {
    const app = express();
    addRoutes(app);

    expect(listEndpoints(app)).toEqual([
      { methods: ['GET'], middlewares: ['sendServerIsRunning'], path: '/' },
      { methods: ['GET'], middlewares: ['getUsers'], path: '/users' },
    ]);
  });
});
