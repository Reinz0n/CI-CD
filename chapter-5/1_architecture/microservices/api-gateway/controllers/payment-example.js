const {PAYMENT_SERVICE_HOST} = process.env;
const http = require('../external/http');
const api = http(PAYMENT_SERVICE_HOST);

module.exports = {
    createPayment: async (req, res, next) => {
        try {
            const {status, data} = await api.post('/create-payment', req.body);
            return res.status(status).json(data);
        } catch (err) {
            next(err);
        }
    },

    refund: async (req, res, next) => {
        try {
            const {status, data} = await api.post('/refund', req.body);
            return res.status(status).json(data);
        } catch (err) {
            next(err);
        }
    }
};