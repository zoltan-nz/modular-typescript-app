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

There is many-to-many relation between category and product.


## Lintint TypeScript with ESLint

- [Linting your TypeScript Codebase](https://typescript-eslint.io/docs/linting/linting)
