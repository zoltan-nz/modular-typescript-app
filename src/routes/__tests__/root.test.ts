import express from "express";
import request from 'supertest';
import { rootRouter } from "../root";

describe('Routes', () => {
  test('root', async () => {
    const app = express();
    app.use(rootRouter);
    const res = await request(app).get('/');
    expect(res.status).toEqual(200);
  });

  it('should respond with message', async () => {
    const expectedResponse = { message: 'Server is running...' };

    const app = express();
    app.use(rootRouter);

    const res = await request(app).get('/');
    expect(res.body).toEqual(expectedResponse);
  });
});
