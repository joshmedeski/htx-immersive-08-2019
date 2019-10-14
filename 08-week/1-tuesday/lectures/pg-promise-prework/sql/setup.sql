CREATE DATABASE movies_pgpromise_prework;
\c movies_pgpromise_prework;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title TEXT UNIQUE NOT NULL,
  release_year INT,
  genre TEXT
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  movie_id INT REFERENCES movies(id)
);
