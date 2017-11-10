import * as request from 'supertest';

import App from '../../src/app';
import router from '../../src/app-router';
import Server from '../../src/app-server';

const app = App('test');
router(app);
const server = Server(app);

describe('Server is running', () => {

  test('should respond with OK', async () => {

    const res = await request(server).get('/');
    expect(res.status).toEqual(200);
  });

  it('should respond with json', () => {
    // return request(app)
    //   .get('/')
    //   .then(res => expect(res).to.be.json);
  });

  it('should respond with message', () => {
    // const expectedResponse = JSON.stringify({ message: 'Server is running...' });
    //
    // return request(app)
    //   .get('/')
    //   .then(res => {
    //     const response = JSON.stringify(res.body);
    //     expect(response, expectedResponse);
    //   });
  });
});
