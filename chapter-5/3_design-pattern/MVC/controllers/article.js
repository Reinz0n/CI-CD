const {Article} = require('../models');

module.exports = {
    create: async (req, res, next) => {
        return res.render('articles/create', {title: 'Create articles'});
    },

    store: async (req, res, next) => {
        try {
            const {title, body} = req.body;
            if (!title || !body) {
                return res.render('error', {
                    title: 'Article Detail',
                    error: 'title and body is required!',
                });
            }

            await Article.create({title, body});
            return res.redirect('/articles');
        } catch (err) {
            next(err);
        }
    },

    getAll: async (req, res, next) => {
        try {
            const articles = await Article.findAll();

            return res.render('articles/list', {
                title: 'Article list',
                articles: articles
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
                return res.render('error', {
                    title: 'Article Detail',
                    error: `article with id ${article_id} is doesn't exist!`,
                });
            }

            return res.render('articles/details', {
                title: 'Article Detail',
                article: article
            });
        } catch (err) {
            next(err);
        }
    },
};