const express = require('express');
const router = express.Router();
const articleController = require('./controllers/article');

// create articles
router.get('/articles/create', articleController.create)
router.post('/articles', articleController.store);

// get all articles
router.get('/articles', articleController.getAll);

// get detail articles
router.get('/articles/:article_id', articleController.getDetail);

module.exports = router;