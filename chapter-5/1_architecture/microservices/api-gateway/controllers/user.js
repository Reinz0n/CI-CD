const {USER_SERVICE_HOST} = process.env;
const http = require('../external/http');
const api = http(USER_SERVICE_HOST);

module.exports = {
    register: async (req, res, next) => {
        try {
            const {status, data} = await api.post('/register', req.body);
            return res.status(status).json(data);
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const {status, data} = await api.post('/login', req.body);
            return res.status(status).json(data);
        } catch (err) {
            next(err);
        }
    },

    whoami: async (req, res, next) => {
        return res.status(200).json({
            status: true,
            message: 'success!',
            data: {
                user: req.user
            }
        });
    }
};