#!/usr/bin/env node

import 'reflect-metadata';
import { Environment } from '@localhost/express-application';
import { env } from 'process';
import { ApiCategoryApp } from '../app';

(async () => {
  const { NODE_ENV = Environment.production } = env;
  const app = new ApiCategoryApp(NODE_ENV as Environment);
  try {
    await app.start();
  } catch (err) {
    console.error(err);
    throw err;
  }
})();
