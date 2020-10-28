import express from 'express';
import { Server } from 'http';
import { launchExpressServer } from './launch-express-server';

describe('launchExpressServer', () => {
  it('should launch express server', () => {
    const app = express();
    const server = launchExpressServer(app, '0');
    expect(server).toBeInstanceOf(Server);
    server.close();
  });
});
