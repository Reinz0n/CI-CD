const {Article} = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const {title, body} = req.body;
            if (!title || !body) {
                return res.status(400).json({
                    status: false,
                    message: 'title and body is required!',
                    data: null
                });
            }

            const article = await Article.create({title, body});
            return res.status(200).json({
                status: true,
                message: 'success',
                data: article
            });
        } catch (err) {
            next(err);
        }
    },

    getAll: async (req, res, next) => {
        try {
            const articles = await Article.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: articles
            });
        } catch (err) {
            next(err);
        }
    },

    getDetail: async (req, res, next) => {
        try {
            const {article_id} = req.params;
            const article = await Article.findOne({where: {id: article_id}});
            if (!article) {
                return res.status(404).json({
                    status: false,
                    message: `article with id ${article_id} is doesn't exist!`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: article
            });
        } catch (err) {
            next(err);
        }
    },
};