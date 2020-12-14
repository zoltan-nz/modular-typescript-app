import { Environment } from '@localhost/express-application';
import { container, singleton } from 'tsyringe';
import { ApiCategoryApp } from '../app';
import { Logger } from '../services/logger';

jest.mock('../services/logger');

describe('ApiCategoryApp', () => {
  let mockLogger: Logger;
  beforeEach(() => {
    // container.clearInstances();
    mockLogger = container.registerSingleton<Logger>(Logger, Logger).resolve(Logger);
  });

  test('is exists', async () => {
    const app = new ApiCategoryApp(Environment.test);
    expect(app).toBeDefined();
    expect(mockLogger.log).toHaveBeenCalledTimes(1);
  });

  test('try again', async () => {
    const app = new ApiCategoryApp(Environment.test);
    expect(app).toBeDefined();
    expect(mockLogger.log).toHaveBeenCalledTimes(1);
  });
});
