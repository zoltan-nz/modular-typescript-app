# Modular TypeScript App

## Reading

- [Lerna](https://github.com/lerna/lerna)

## GitHub private npm package management

- .npmrc
- yarn login
- package.json 
- scopes

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
