#!/usr/bin/env node

/**
 * Command line tool which creates an app, setup routes and launching a server.
 *
 * Options:
 * NODE_ENV='production' (default is 'development')
 * PORT=4100 (default is 3000)
 */

import { stdout } from 'process';
import App from '../app';
import router from '../app-router';
import Server from '../app-server';

stdout.write('Express Typescript App. Start...\n');

const app = App();
router(app);

const server = Server(app, 3000);
