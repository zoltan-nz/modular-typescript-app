import chalk from 'chalk';
import { error, info } from 'console';
import { Application } from 'express';
import { createServer, Server } from 'http';
import process, { exit } from 'process';

const { red, green, magenta } = chalk;

enum ErrorCode {
  inUse = 'EADDRINUSE',
  noAccess = 'EACCES',
  sigInt = 'SIGINT',
}

const DEFAULT_PORT = '3000';

/**
 * @param {Application} app
 * @param {string} port
 * @returns {Server}
 */
const launchExpressServer = (app: Application, port?: string): Server => {
  const portNumber = parseInt(port || DEFAULT_PORT, 10);
  const server: Server = createServer(app);

  process.on(ErrorCode.sigInt, () => shutdownServerGracefully(server));
  server.on('error', err => onError(err, portNumber));
  server.on('listening', () => onListening(server));

  server.listen(portNumber);
  return server;
};

/**
 * Called when some error happened with Node.js server
 *
 * @param {NodeJS.ErrnoException} exception
 * @param {number} portNumber
 */
function onError(exception: NodeJS.ErrnoException, portNumber: number): void {
  if (exception.syscall !== 'listen') throw exception;

  switch (exception.code) {
    case ErrorCode.noAccess:
      elevatedPrivilegesRequired(portNumber);
      break;
    case ErrorCode.inUse:
      alreadyInUse(portNumber);
      break;
    default:
      throw exception;
  }
}

/**
 * @param {Server} server
 *
 * istanbul ignore next
 */
function onListening(server: Server): void {
  const addr = server.address();

  // Pipe name
  if (typeof addr === 'string') {
    return info(green('Server started on PIPE: ', addr));
  }

  info(green('Server started on ', addr?.address, addr?.port));
}

/**
 * @param {number} portNumber
 */
function elevatedPrivilegesRequired(portNumber: number) {
  error(red(`Using PORT ${portNumber} requires elevated privileges`));
  exit(1);
}

/**
 * @param {number}portNumber
 */
function alreadyInUse(portNumber: number) {
  error(red(`PORT ${portNumber} is already in use`));
  exit(1);
}

/**
 * @param {Server} server
 */
function shutdownServerGracefully(server: Server): void {
  info(magenta('\n-------------\nShutdown Node.js Server gracefully...'));
  server.close(() => info(magenta('...closed')));
}

export { launchExpressServer };
