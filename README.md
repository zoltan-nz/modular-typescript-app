# Modular TypeScript App

## Development

1. Launch local `verdaccio` server.

## Lerna

- [Lerna](https://github.com/lerna/lerna)

```
lerna publish --force-publish=myFullNpmPackageName --no-git-tag-version --no-push
```

## GitHub private npm package management

- .npmrc
- yarn login
- package.json
- scopes
- verdaccio

## Ideas

Let's create a simple backend for a Point of Sales system.

Data models:

- Products
- Categories

Endpoints:

```
/products
  GET
  POST
/products/:product_id
  GET
  PUT
  DELETE
/categories
  GET
  POST
/categories/:category_id
  GET
  PUT
  DELETE
```

- Schools
- Teachers

Hierarchy:

- Teachers belongs to Schools
- Teachers management hierarchy

There is many-to-many relation between category and product.

## Lintint TypeScript with ESLint

- [Linting your TypeScript Codebase](https://typescript-eslint.io/docs/linting/linting)

Install the following packages:

```
    "@typescript-eslint/eslint-plugin"
    "@typescript-eslint/parser"
    "eslint"
    "eslint-config-prettier"
    "eslint-import-resolver-typescript"
    "eslint-plugin-eslint-comments"
    "eslint-plugin-import"
    "eslint-plugin-jest"
    "eslint-plugin-node"
```

```
yarn add -D \
    "@typescript-eslint/eslint-plugin" \
    "@typescript-eslint/parser" \
    "eslint" \
    "eslint-config-prettier" \
    "eslint-import-resolver-typescript" \
    "eslint-plugin-eslint-comments" \
    "eslint-plugin-import" \
    "eslint-plugin-jest" \
    "eslint-plugin-node"
```

Check out [`.eslintrc.js`](./.eslintrc.js) file.

## ts-node-dev

Using for development, automatically restart server on file changes.

## Developer Experience

`yarn dev` in the root directory will start:

1. linter in each project in watch mode
2. test in each project in watch mode
3. lib transpilation or server in each project in watch mode

Library transpilation can be done with tsc --watch --preserveWatchOutput

Express server can be launched with ts-node-dev

## Dependency Injection

DI for injecting global services into smaller components and also inject services into dedicated routes and controllers.

Main injectable services:

- Database
- Cache
- Logger
- Config
- EventBus
