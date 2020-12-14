import { randomUUID } from 'crypto';
import { singleton } from 'tsyringe';

@singleton()
export class Logger {
  public _id = randomUUID();

  constructor() {
    console.log(`Logger ${this._id} created`);
  }

  public log(message: string): void {
    console.log(`logger id: ${this._id}`);
    console.log(message);
  }
}
