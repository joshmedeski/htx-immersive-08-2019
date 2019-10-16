# Bcrypt Express Postgres App

## Prerequisites

- `npm install -g nodemon`
- https://eggerapps.at/postico/
- https://postgresapp.com

## Steps to Recreate

- Create new, empty, folder
- `npm init -y`
- `npm install express pg-promise bcrypt body-parser express-session pug`
- Setup app.js
  - Setup body parser
  - Setup session
  - Setup pug templating
- Create pug template to extend (ex: 'layout.pug')
- Setup our first route and render with pug template (ex: 'index.pug' to '/' route)
