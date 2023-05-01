require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./routes');

const {
    HTTP_PORT = 3000
} = process.env;

app.use(express.json());
app.use(morgan('dev'));

app.use(router);

// 500
app.use((err, req, res, next) => {
    if (err.response) {
        const {status, data} = err.response;
        return res.status(status).json(data);
    }

    let message = err.message;
    if (err.code == 'ECONNREFUSED') {
        message = 'service unavailable!';
    }

    return res.status(500).json({
        status: false, 
        message: message,
        data: null
    });
});

app.listen(HTTP_PORT, () => console.log('running on port', HTTP_PORT));