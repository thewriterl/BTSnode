var express = require('express');
var chalk = require('chalk');
var debug = require('debug');
var morgan = require('morgan');
var path = require('path');
var filmRouter = require('./routes/filmRoute')

var app = express();
var port = process.env.PORT || 1998;
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/', filmRouter);
// app.set('views', './src/views');
// app.set('view engine', 'pug');

app.listen(port, function() {
    console.log('listening on port ' + chalk.green(port));
});