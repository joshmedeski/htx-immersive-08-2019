const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/movies_pgpromise_inclass");

function getMovies() {
  return db.any("SELECT id, title FROM movies;");
}

function getFavorites(userId) {
  return db.any(
    "SELECT title FROM favorites INNER JOIN movies ON(favorites.movie_id = movies.id) WHERE user_id = $1;",
    [userId]
  );
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

function addFavorite(userId, movieId) {
  return db.none("INSERT INTO favorites (user_id, movie_id) VALUES ($1, $2)", [
    userId,
    movieId
  ]);
}

module.exports = {
  getMovies: getMovies,
  getMovie: getMovie,
  findUser: findUser,
  createUser: createUser,
  addFavorite: addFavorite,
  getFavorites: getFavorites
};
