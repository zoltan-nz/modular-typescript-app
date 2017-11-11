import chalk from 'chalk';
import { error, info } from 'console';
import * as debug from 'debug';
import { Application } from 'express';
import { createServer, Server } from 'http';
import * as process from 'process';
import { exit } from 'process';

const { red, green } = chalk;

const ERROR_CODES = {
  inUse: 'EADDRINUSE',
  noAccess: 'EACCES'
};

/**
 * Launch the app on the given port, default port is 3000.
 *
 * @param {Application} app
 * @param {number} port
 * @returns {Server}
 */
export default function(app: Application, port: number = 3000): Server {
  const server: Server = createServer(app);

  process.on('SIGINT', () => shutdownServerGracefully(server));
  server.listen(port);
  server.on('error', err => onError(err, port));
  server.on('listening', () => onListening(server));

  return server;
}

function onError(exception: NodeJS.ErrnoException, port: number): void {
  if (exception.syscall !== 'listen') throw exception;

  switch (exception.code) {
    case ERROR_CODES.noAccess:
      elevatedPrivilegesRequired(port);
      break;
    case ERROR_CODES.inUse:
      alreadyInUse(port);
      break;
    default:
      throw exception;
  }
}

function onListening(server: Server): void {
  const addr = server.address();
  debug('app')(`Listening on ${addr.address}:${addr.port}`);
}

function elevatedPrivilegesRequired(port: number) {
  error(red(`Using PORT ${port} requires elevated privileges`));
  exit(1);
}

function alreadyInUse(port: number) {
  error(red(`PORT ${port} is already in use`));
  exit(1);
}

function shutdownServerGracefully(server: Server): void {
  info(green('Shutdown Express Server gracefully...'));
  server.close(() => info(green('...closed')));
}
