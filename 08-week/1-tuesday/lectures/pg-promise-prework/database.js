const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/movies_pgpromise_prework");

async function getAllMovies() {
  return await db.any("select * from movies");
}

async function getMovie(id) {
  return await db.one("select * from movies where id = $1", [id]);
}

module.exports = {
  getAllMovies: getAllMovies,
  getMovie: getMovie
};
