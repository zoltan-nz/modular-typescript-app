import * as request from 'supertest';

import App from '../../src/app';
import router from '../../src/app-router';
import Server from '../../src/app-server';

import * as express from 'express';
import { Server as ServerType } from 'http';

let app: express.Application;
let server: ServerType;

describe('Server is running', () => {
  beforeAll(() => {
    app = App('test');
    router(app);
    server = Server(app, 3456);
  });

  afterAll(() => {
    server.close();
  });

  test('should respond with OK', async () => {

    const res = await request(server).get('/');
    expect(res.status).toEqual(200);
  });

  it('should respond with json', async () => {

    const res = await request(server).get('/');
    expect(res.type).toBe('application/json');
  });

  it('should respond with message', async () => {
    const expectedResponse = { message: 'Server is running...' };

    const res = await request(server).get('/');
    expect(res.body).toEqual(expectedResponse);
  });
});
