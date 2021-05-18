# bookmarks-server
bookmarks server application

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests in watch mode `npm test`

## Deploying

When your new project is ready for deployment, add a new heroku application with `heroku create`. This will make a new git remote called "heroku" and you can then `npm run deploy` which will push to this remote's master branch.

## Endpoints

GET => http://localhost:8000/bookmarks/
POST => http://localhost:8000/bookmarks/
GET => /bookmarks/:bookmark_id
DELETE => /bookmarks/:bookmark_id

## create database
createdb -U dunder_mifflin bookmark

## create test database
createdb -U dunder_mifflin bookmark-test

## seed the database
psql -U dunder_mifflin -d bookmark -f ./seeds/seed.bookmarks.sql
psql -U dunder_mifflin -d bookmark -f ./seeds/trunc.bookmarks.sql

psql -U dunder_mifflin -d bookmark-test -f ./seeds/seed.bookmarks.sql
psql -U dunder_mifflin -d bookmark-test -f ./seeds/trunc.bookmarks.sql

