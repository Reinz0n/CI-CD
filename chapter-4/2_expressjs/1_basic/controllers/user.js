const client = require('../config/database');

module.exports = {
    getAll: async (req, res, next) => {
        try {
            let query = 'SELECT * FROM users';
            let response = await client.query(query);

            return res.status(200).json({
                users: response.rows
            });
        } catch (err) {
            next(err);
        }
    },

    getDetail: async (req, res, next) => {
        try {
            const id = req.params.id;

            let query = `SELECT * FROM users WHERE id = ${id}`;
            let response = await client.query(query);

            return res.status(200).json({
                users: response.rows
            });
        } catch (err) {
            next(err);
        }
    }
};