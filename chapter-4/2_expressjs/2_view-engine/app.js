const express = require('express');
const app = express();
const port = 8000;

const data = require('./data.json');
app.set('view engine', 'ejs');  // set view engine
app.use(express.static('public')); // serve public file

function logMiddleware(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
};

// http://localhost:8000/ -> welcome client (welcome to supplier api)
app.get('/', logMiddleware, (req, res, next) => {
    try {
        res.render('index.ejs'); // return html page
        // res.status(200).json({message: 'welcome to supplier api!'}); // return json
    } catch (err) {
        next(err);
    }
});

// http://localhost:8000/users -> tampilkan data users
app.get('/users', (req, res, next) => {
    try {
        res.render('users/index.ejs', {users: data.users}); // return html page
        // res.status(200).json({users: data.users}); // return json
    } catch (err) {
        next(err);
    }
});

// 404 handler
app.use((req, res, next) => {
    return res.render('error/not-found.ejs', {endpoint: req.url});
    // return res.status(404).json({message: `can't find ${req.url}`}); // return json
});

// 500 handler
app.use((err, req, res, next) => {
    return res.render('error/internal-server-error.ejs', {err: err.message});
    // return res.status(500).json({message: err.message}); // return json
});

app.listen(port, () => console.log('running on port', port));