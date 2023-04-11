const express = require('express');
const router = express.Router();
const post = require('../controller/post');

router.get('/', (req, res) => res.status(200).json({message: "welcome to blog api"}));

router.get('/posts', post.index); // get all post
router.get('/posts/:post_id', post.show); // get detail post
router.post('/posts', post.store); // create new post
router.put('/posts/:post_id', post.update); // update post
router.delete('/posts/:post_id', post.destroy); // delete post

module.exports = router;