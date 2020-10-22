/* istanbul ignore file */
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

const launchExpressServer = (app: Application, port: string = DEFAULT_PORT): Server => {
  const portNumber = parseInt(port, 10);
  const server: Server = createServer(app);

  process.on(ErrorCode.sigInt, () => shutdownServerGracefully(server));
  server.on('error', err => onError(err, portNumber));
  server.on('listening', () => onListening(server));

  server.listen(portNumber);
  return server;
};

/* istanbul ignore next */
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

/* istanbul ignore next */
function onListening(server: Server): void {
  const addr = server.address();

  // Pipe name
  if (typeof addr === 'string') {
    return info(green('Server started on PIPE: ', addr));
  }

  info(green('Server started on ', addr?.address, addr?.port));
}

/* istanbul ignore next */
function elevatedPrivilegesRequired(portNumber: number) {
  error(red(`Using PORT ${portNumber} requires elevated privileges`));
  exit(1);
}

/* istanbul ignore next */
function alreadyInUse(portNumber: number) {
  error(red(`PORT ${portNumber} is already in use`));
  exit(1);
}

/* istanbul ignore next */
function shutdownServerGracefully(server: Server): void {
  info(magenta('\n-------------\nShutdown Node.js Server gracefully...'));
  server.close(() => info(magenta('...closed')));
}

export { launchExpressServer };
