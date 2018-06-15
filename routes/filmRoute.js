var express = require('express');
var chalk = require('chalk');
var debug = require('debug');
var morgan = require('morgan');
var path = require('path');

var app = express();
var port = process.env.PORT || 1998;
var filmRouter = express.Router();

filmRouter.route('/films')
    .get(function(req, res) {
        res.sendFile(__dirname + '/views/', 'films.html');
    });

filmRouter.route('/')
    .get(function (req, res) {
        res.send('Welcome to the API');
    });
    
filmRouter.route('/films/:id')
    .get(function(req, res) {
        res.send('SINGLE FILM PAGE')
    }); 

module.exports = filmRouter;