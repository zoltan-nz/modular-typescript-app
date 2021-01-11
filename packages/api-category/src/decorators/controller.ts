const METADATA_KEY = 'controller';

export function controller() {
  return (target: any) => {
    const metadata = {
      type: 'controller',
      target: target,
    };
    Reflect.defineMetadata('controller', metadata, target);
  };
}

export function get(path: string) {
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    const metadata = {
      type: 'get',
      path,
      descriptor,
    };
    Reflect.defineMetadata('controller:get', metadata, target, key);
  };
}
