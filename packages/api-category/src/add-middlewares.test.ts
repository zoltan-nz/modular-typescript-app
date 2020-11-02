import express from 'express';
import request from 'supertest';
import { addMiddlewares } from './add-middlewares';

describe('addMiddlewares', () => {
  test('app can parse json body', async () => {
    const app = express();
    addMiddlewares(app);
    app.post('/', (req, res) => res.json(req.body));

    const response = await request(app).post('/').send({ dummy: 'test object' });
    expect(response.status).toEqual(200);
    expect(response.type).toEqual('application/json');
    expect(response.body).toEqual({ dummy: 'test object' });
  });
});
