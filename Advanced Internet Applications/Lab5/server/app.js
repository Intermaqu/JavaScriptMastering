const cors = require("cors");


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const db = require("./database/db");
const { DatabaseError } = require("pg");

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors('*'));
app.use('/', indexRouter);
app.use('/users', usersRouter);

// db.restore();

// catch 404 and forward to error handler
module.exports = app;
