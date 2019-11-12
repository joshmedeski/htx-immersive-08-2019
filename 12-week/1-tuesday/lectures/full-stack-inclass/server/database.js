const pgp = require("pg-promise")();
const db = pgp("postgres://localhost:5432/full_stack_blog_sample");

module.exports = {
  getPosts: () => {
    return db.any("SELECT * FROM posts;");
  }
};
