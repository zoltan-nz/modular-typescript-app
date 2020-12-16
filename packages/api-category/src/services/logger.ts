import { randomUUID } from 'crypto';
import { singleton } from 'tsyringe';
import { sandbox } from '../decorators/sandbox';

@singleton()
export class Logger {
  public _id = randomUUID();

  constructor() {
    console.log(`Logger ${this._id} created`);
  }

  @sandbox()
  public log(message: string): void {
    console.log(`logger id: ${this._id}`);
    console.log(message);
  }
}
