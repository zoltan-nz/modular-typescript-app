import { autoInjectable } from "tsyringe";

@autoInjectable()
export class Logger {
  public log(message: string): void {
    console.log(message);
  }
}
