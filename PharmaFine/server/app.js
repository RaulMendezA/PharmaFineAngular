var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var appRoutes = require('./routes/app');

var app = express();

// hbs (no usado en Angular)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', appRoutes);

app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
