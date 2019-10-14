const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/movies_pgpromise_prework");

async function getAllMovies() {
  return await db.any("select * from movies");
}

async function getMovie(id) {
  return await db.one("select * from movies where id = $1", [id]);
}

async function getFavorites(userId) {
  console.log("ADD TO FAVORITES!");
  console.log(userId);
  return await db.any(
    "SELECT * FROM favorites INNER JOIN movies ON(favorites.movie_id = movies.id);"
  );
}

async function registerUser(email, password) {
  return await db.none("insert into users (email, password) values ($1, $2)", [
    email,
    password
  ]);
}

async function login(email, password) {
  try {
    let user = await db.one("select * from users where email = $1", [email]);
    if (user.password != password) {
      throw new Error("Password incorrect");
    }
    return Promise.resolve(user);
  } catch (e) {
    console.error(e);
    Promise.reject(e);
  }
}

async function addToFavorites(movieId, userId) {
  try {
    return await db.none(
      "insert into favorites (movie_id, user_id) values ($1, $2)",
      [movieId, userId]
    );
  } catch (e) {
    console.error(e);
    Promise.reject(e);
  }
}

module.exports = {
  getAllMovies: getAllMovies,
  getMovie: getMovie,
  getFavorites: getFavorites,
  registerUser: registerUser,
  login: login,
  addToFavorites: addToFavorites
};
