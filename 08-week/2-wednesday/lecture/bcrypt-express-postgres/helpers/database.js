const pgp = require("pg-promise");
const pgpDb = pgp("postgres://localhost:5432/bcrypt_site");

/**
 * Checks if there is a user with the given email in the database.
 *
 * @param {string} email The email address for the user
 * @returns nothing if there is no user, the user if they exist
 */
function checkForUser(email) {
  return pgpDb.oneOrNone("SELECT email FROM users WHERE email = $1", [email]);
}

module.exports = {
  checkForUser: checkForUser
};
