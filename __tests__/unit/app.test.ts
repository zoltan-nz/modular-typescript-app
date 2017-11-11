import App from '../../src/app';

describe('App', () => {
  test('it is exist', () => {
    const app = App();
    expect(app).toBeDefined();
  });
});
