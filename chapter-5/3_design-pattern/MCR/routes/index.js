const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');

// create articles
router.post('/articles', articleController.create);

// get all articles
router.get('/articles', articleController.getAll);

// get detail articles
router.get('/articles/:article_id', articleController.getDetail);

module.exports = router;