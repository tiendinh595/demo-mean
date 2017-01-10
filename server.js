'use strict';

var express = require('express');
var app = express();
var router = express.Router();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var cookieSession = require('cookie-session');
app.use(cookieSession({
    name: 'session',
    keys: ['xxx'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

//load config
var config = require('./config/app');
var database = require('./config/database');

//config
database.config(config.database);
app.use('/publics/', express.static(config.dir.resources));

var loader = require('./core/loader')(config);

//set
app.set('view engine', 'ejs');
app.set('views', './resources/views');

//loader
loader.loadAllRouter(app);

//startup
app.listen(config.port, function () {
    console.log('server started port '+config.port);
});