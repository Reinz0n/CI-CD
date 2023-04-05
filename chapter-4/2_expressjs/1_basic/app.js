require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 8000;

app.use(morgan('dev'));

app.use(express.json()); // built-in middleware -> untuk membaca type json (akan dibahas di rest api)
app.use(express.urlencoded()); // built-in middleware -> dipakai ketika bekerja dengan template engine (akan dibahas di template engine)
app.use(express.static('/public')); // built-in middleware -> dipakai membuat folder public (akan dibahan media handling)

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}); // application level middleware

const router = require('./routes');
app.use(router); // use router

app.use((req, res, next) => {
    return res.status(404).json({
        message: `cant find ${req.url}`
    });
    next();
}); // 404 error handling middleware

app.use((err, req, res, next) => {
    return res.status(500).json({
        message: err.message
    });
}); // error handling middleware


app.listen(port, () => console.log('running on port', port));