## ORM

- https://en.wikipedia.org/wiki/Object-relational_mapping
- https://sequelize.org

## Setting Up

```sh
$ npx sequelize init
```

### Creating a Model

```sh
$ npx sequelize model:create --name User --attributes username:string password:string
```

### Running Migration

```sh
$ npx sequelize db:migrate
```

### Generating Seeds

```sh
$ npx sequelize seed:generate --name categories --model-path models/category.js
```
