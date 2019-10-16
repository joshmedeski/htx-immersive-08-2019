CREATE DATABASE bcrypt_site;

\c bcrypt_site;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);