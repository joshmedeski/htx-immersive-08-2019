const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/movies_pgpromise_inclass");

function getMovies() {
  return db.any("SELECT id, title FROM movies;");
}

function findUser(email) {
  return db.oneOrNone("SELECT * FROM users WHERE email = $1;", [email]);
}

function getMovie(id) {
  return db.one("SELECT * FROM movies WHERE id = $1;", [id]);
}

function createUser(email, password) {
  return db.none("INSERT INTO users (email, password) VALUES ($1, $2);", [
    email,
    password
  ]);
}

module.exports = {
  getMovies: getMovies,
  getMovie: getMovie,
  findUser: findUser,
  createUser: createUser
};
