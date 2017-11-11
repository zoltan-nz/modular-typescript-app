# API example app with Express.js and TypeScript

## Implementation log

Add development and test support packages:

```
$ npm i -D @types/jest @types/node @types/superagent @types/supertest chokidar concurrently del jest nodemon supertest ts-jest ts-node tslint typescript
```

Add typescript configuration files (`tslint.json`, `tsconfig.json`):

```
$ tslint --init
$ tsc --init
```

Add custom rules to `tslint.json`:

```
"rules": {
    "curly": false,
    "quotemark": [ true, "single", "avoid-escape" ],
    "arrow-parens": [ true, "ban-single-arg-parens" ],
    "interface-name": false,
    "object-literal-sort-keys": false,
    "trailing-comma": false,
    "no-unused-expression": false,
    "variable-name": false,
    "no-implicit-dependencies": false,
    "no-namespace": false
  },
```

Add custom configuration options to `tsconfig.json`:

```
{
  "target": "ES2017",
  "module": "commonjs",
  "sourceMap": true,
  "outDir": "./dist",
  "moduleResolution": "node",
  "typeRoots": [ "node_modules/@types", "@types" ]
},
{
  "include": [ "src/**/*" ],
  "exclude": [ "node_modules", "**/*-test.ts" ]
}
```

Add custom npm scripts:

```
"scripts": {
    "clean": "del ./dist",
    "lint": "tslint --project ./tsconfig.json --fix",
    "build": "tsc",
    "test": "jest",
    "server": "node ./dist/index.js",
    "watch:build": "tsc --watch",
    "watch:lint": "chokidar ./**/*.ts --initial --silent -c 'npm -s run lint'",
    "watch:test": "CI=true jest --watch",
    "watch:server": "nodemon -w ./ -x npm run server",
    "dev": "concurrently --names 'BUILD,TEST,LINT,SERVER' -c 'yello,cyan,blue,magenta' 'npm run watch:build' 'npm run watch:test' 'npm run watch:lint' 'npm run watch:server'",
    "start": "npm run clean && npm run lint && npm run build && npm run server"
  },
```

Add basic packages:

```
$ npm i -S express, chalk, debug
$ npm i -D @types/express, @types/debug
```

Add basic express app files:

* `src/bin/launcher.ts`
* `src/app.ts`
* `src/app-router.ts`
* `src/app-server.ts`

Add more package

* morgan
* body-parser

Add jest config to `package.json`

```
"jest": {
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "moduleFileExtensions": [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json"
    ]
  }
```

Setup gracefully shutdown for express server with listening on `SIGINT` event.

```
  process.on('SIGINT', () => shutdownServerGracefully(server));
  ...
  
function shutdownServerGracefully(server: Server): void {
  info(green('Shutdown Express Server gracefully...'));
  server.close(() => info(green('...closed')));
}  
```

Add some `lib` to `tsconfig.json` to deal with lint expectations: `"lib": ["es2015.promise", "es2017"],`.

Add new linter rule: `"promise-function-async": true`

Add jest configuration to `jest.config.js`:

```
module.exports = {
  moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json" ],
  testRegex: "(^__tests__/.*|(\\.|/)(test|spec))\\.(ts)$",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  verbose: true,
};
```
