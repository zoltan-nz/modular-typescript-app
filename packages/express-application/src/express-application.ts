import express, { Application } from 'express';
import { Server } from 'http';
import { Environment } from './models/environment';

const DEFAULT_PORT = 3000;

export class ExpressApplication {
  readonly #expressApp: Application;
  readonly #environment: Environment;
  readonly #port: number;

  #server: Server | undefined;

  constructor(environment: Environment, port = DEFAULT_PORT) {
    if (!Object.keys(Environment).includes(environment)) {
      throw Error(`NODE_ENV value is not supported, must have: ${Object.keys(Environment)}`);
    }

    this.#environment = environment;
    this.#port = port;
    this.#expressApp = express();

    this.#init();
  }

  #init(): void {
    this.#expressApp.use(express.json());
    this.#expressApp.use(express.urlencoded({ extended: true }));
    this.#expressApp.set('env', this.#environment);
    this.#expressApp.disable('x-powered-by');
  }

  public get expressApp(): Application {
    return this.#expressApp;
  }

  public get environment(): Environment {
    return this.#environment;
  }

  public get port(): number {
    return this.#port;
  }

  public get server(): Server | undefined {
    return this.#server;
  }

  public start(): void {
    try {
      this.#server = this.#expressApp.listen(this.#port, () => {
        console.log(`Express server listening on port ${this.#port}`);
      });
    } catch (error) {
      console.error(error);
    }
  }
}