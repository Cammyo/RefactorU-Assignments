require('colors');

const SALTY_BITS = 11;
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const express = require('express');
const sessions = require("client-sessions");

const fileServer = express.static('public');

// app.use(sessions()); // uncomment and finish initializing sessions!

var app = express();

app.use(bodyParser.json(), bodyParser.urlencoded({ extended: true }));

/** Database setup **/
mongoose.connect('mongodb://localhost/jail', (err) => {
    if( err ) {
        console.error('Could not connect to the Mongo Jailhouse!'.bold.red);
    } else {
        console.info("Connected to the Jailhouse!".bold.green);
    }
});

var User = mongoose.model('user', mongoose.Schema({
    username : { type: String, required: true, unique: true },
    password : { type: String, required: true },
    role     : { type: String, required: true }
}));

/*
    app.get('/example', protected, (req, res) => { res.end(); });

    function protected(req, res, next) {
        if( req.session.user.role === 'someRole' ) {
            // do something and call next()
        } else {
            // send down a forbidden response (status code 403)
        }
    }
*/

app.get('/', (req, res) => {
    res.redirect('/html/login.html');
});
app.get('/html/jail.html', (req, res, next) => {
    next();
});
app.get('/html/lobby.html', (req, res, next) => {
    next();
});
app.get('/html/visitors-lounge.html', (req, res, next) => {
    next();
});
app.get('/html/cafeteria.html', (req, res, next) => {
    next();
});
app.get('/html/wardens-office.html', (req, res, next) => {
    next();
});
app.get('/html/cell-e.html', (req, res, next) => {
    next();
});
app.get('/html/cell-m.html', (req, res, next) => {
    next();
});

app.post('/login', (req, res) => {
    res.status(403).end();
});

// intentionally mounting the static middleware down here so that
// you can horizontally mount middleware on a per route basis above...
app.use(fileServer);

app.listen(PORT, () => { console.info('Jailhouse up! PORT:', PORT); });
