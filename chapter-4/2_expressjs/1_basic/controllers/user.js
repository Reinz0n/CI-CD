const client = require('../config/database');

module.exports = {
    getAll: async (req, res) => {
        try {
            await client.connect();

            let query = 'SELECT * FROM users';
            let response = await client.query(query);
            await client.end();

            return res.status(200).json({
                users: response.rows
            });
        } catch (err) {
            await client.end();
        }
    },

    getDetail: async (req, res) => {
        try {
            await client.connect();

            const id = req.params.id;

            let query = `SELECT * FROM users WHERE id = ${id}`;
            let response = await client.query(query);
            await client.end();

            return res.status(200).json({
                users: response.rows
            });
        } catch (err) {
            await client.end();
        }
    }
};