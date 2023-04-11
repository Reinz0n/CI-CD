const data = require('../db/data.json');
const fs = require('fs');

module.exports = {
    index: (req, res, next) => {
        try {
            return res.status(200).json({
                message: 'success',
                data: data.posts
            });
        } catch (error) {
            next(err);
        }
    },

    show: (req, res, next) => {
        try {
            const {post_id} = req.params;

            let filteredPost = data.posts.filter(post => post.id == post_id);

            if (filteredPost.length == 0) {
                return res.status(404).json({
                    message: `posts with id ${post_id} is doesn't exist`
                });
            }

            return res.status(200).json({
                message: 'success',
                data: filteredPost[0]
            });
        } catch (error) {
            next(error);
        }
    },

    store: (req, res, next) => {
        try {
            let newPost = {
                id: data.next_post_id++,
                title: req.body.title,
                body: req.body.body
            };

            data.posts.push(newPost);

            fs.writeFileSync('./db/data.json', JSON.stringify(data, null, "\t"));

            return res.status(201).json({
                message: 'posts created!',
                data: newPost
            });
        } catch (error) {
            next(error);
        }
    },

    update: (req, res, next) => {
        try {
            const {post_id} = req.params;
            const {title, body} = req.body;

            const index = data.posts.findIndex(post => post.id == post_id);
            if (index < 0) {
                return res.status(404).json({
                    message: `posts with id ${post_id} is doesn't exist`,
                });
            }

            if (title) {
                data.posts[index].title = title;
            }
            if (body) {
                data.posts[index].body = body;
            }

            fs.writeFileSync('./db/data.json', JSON.stringify(data, null, "\t"));

            return res.status(201).json({
                message: 'success',
                data: data.posts[index]
            });
        } catch (error) {
            next(error);
        }
    },

    destroy: (req, res, next) => {
        try {
            const {post_id} = req.params;

            const index = data.posts.findIndex(post => post.id == post_id);
            if (index < 0) {
                return res.status(404).json({
                    message: `posts with id ${post_id} is doesn't exist`,
                });
            }

            data.posts.splice(index, 1);

            return res.status(200).json({
                message: 'success',
                data: data.posts
            });
        } catch (error) {
            next(error);
        }
    }
};