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

## Drink Functionality

- "/account/drinks/new" page for adding new drinks
- "/account/drinks" to show the drinks I added to the system
- "/drinks" page to show all drinks
- "/drinks/:id" page to show individual drink details
