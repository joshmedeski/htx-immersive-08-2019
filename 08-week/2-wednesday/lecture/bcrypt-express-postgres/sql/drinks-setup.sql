\c bcrypt_site;

CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE drinks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  ingredients JSON,
  cat_id INT REFERENCES categories(id)
);