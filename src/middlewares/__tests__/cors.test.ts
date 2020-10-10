import express, { Express } from 'express';
import supertest from 'supertest';

describe('cors', () => {
  let app: Express;

  beforeEach(async () => {
    jest.resetModules();
    app = express();
    app.get('/', (req, res, next) => res.end());
  });

  it('should manage options calls', async () => {
    process.env.ALLOWED_ORIGIN = '*';
    const { default: applyCors } = await import('../cors');

    app.use(applyCors);

    const { headers, status } = await supertest(app).options('/');

    expect(status).toEqual(200);
    expect(headers['access-control-allow-methods']).toEqual('GET,POST,OPTIONS');
  });

  it('should setup allowed origin', async () => {
    process.env.ALLOWED_ORIGIN = 'https://allowed';
    const { default: applyCors } = await import('../cors');

    app.use(applyCors);

    const { status, headers } = await supertest(app).options('/').set('origin', 'https://allowed');

    expect(status).toEqual(200);
    expect(headers['access-control-allow-origin']).toEqual('https://allowed');
  });

  it('should return undefined for not allowed origin', async () => {
    process.env.ALLOWED_ORIGIN = 'https://allowed';
    const { default: applyCors } = await import('../cors');

    app.use(applyCors);

    const { status, headers } = await supertest(app).options('/').set('origin', 'https://not-allowed');
    expect(status).toEqual(200);
    expect(headers['access-control-allow-origin']).toEqual(undefined);
  });

  test('when ALLOWED_ORIGIN env variable is undefined', async () => {
    process.env.ALLOWED_ORIGIN = undefined;
    const { default: applyCors } = await import('../cors');

    app.use(applyCors);

    const { status, headers } = await supertest(app).options('/').set('origin', 'https://not-allowed');
    expect(status).toEqual(200);
    expect(headers['access-control-allow-origin']).toEqual(undefined);
  });
});
