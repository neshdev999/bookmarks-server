const express = require('express');
const { v4: uuid } = require('uuid');
const logger = require('../logger');
const store = require('../store');
const bookmarksRouter = express.Router();
const bodyParser = express.json();
const validUrl = require('valid-url');

bookmarksRouter
    .route('/bookmarks')
    .get((req, res) => {
        res.json(store.bookmarks);
    })
    .post(bodyParser, (req, res) => {
        const { id, title, url, rating, description } = req.body;

        if (!id) {
            logger.error(`id is required`);
            return res
                .status(400)
                .send('Invalid data');
        }

        if (!title) {
            logger.error(`title is required`);
            return res
                .status(400)
                .send('Invalid data');
        }

        if (!url) {
            logger.error(`url is required`);
            return res
                .status(400)
                .send('Invalid data');
        }

        if (!rating) {
            logger.error(`rating is required`);
            return res
                .status(400)
                .send('Invalid data');
        }

        if (!description) {
            logger.error(`description is required`);
            return res
                .status(400)
                .send('Invalid data');
        }

        if (!Number.isInteger(rating) || rating < 0 || rating > 5) {
            logger.error(`Invalid rating '${rating}' supplied`);
            return res.status(400).send(`'rating' must be a number between 0 and 5`);
        }

        if (!validUrl.isUri(url)) {
            logger.error(`Invalid url '${url}' supplied`);
            return res.status(400).send(`URI is not valid.`);
        }

        const bookmark = { id: uuid(), title, url, description, rating };

        store.bookmarks.push(bookmark);
        logger.info(`Bookmark with id ${bookmark.id}, title ${bookmark.title}, url ${bookmark.url}, description ${bookmark.description}, rating ${bookmark.rating} created.`);

        res.status(201).location(`http://localhost:8000/bookmarks/${bookmark.id}`).json(bookmark);
    });

bookmarksRouter
    .route('/bookmarks/:bookmark_id')
    .get((req, res) => {
        const { bookmark_id } = req.params

        const bookmark = store.bookmarks.find(c => c.id == bookmark_id)

        if (!bookmark) {
            logger.error(`Bookmark with id ${bookmark_id} not found.`)
            return res
                .status(404)
                .send('Bookmark Not Found')
        }

        res.json(bookmark)
    })
    .delete((req, res) => {
        const { bookmark_id } = req.params

        const bookmarkIndex = store.bookmarks.findIndex(b => b.id === bookmark_id)

        if (bookmarkIndex === -1) {
            logger.error(`Bookmark with id ${bookmark_id} not found.`)
            return res
                .status(404)
                .send('Bookmark Not Found')
        }

        store.bookmarks.splice(bookmarkIndex, 1)

        logger.info(`Bookmark with id ${bookmark.id}, title ${bookmark.title}, url ${bookmark.url}, description ${bookmark.description}, rating ${bookmark.rating} deleted.`)
        res
            .status(204)
            .end()
    });





module.exports = bookmarksRouter;