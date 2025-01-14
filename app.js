"use strict";

const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const cookieParser = require('cookie-parser');

//routers declaration
const indexRouter = require('./routes');
app.use(express.json()); //middleware to parse all req res to json type
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', path.join(`${__dirname}/views`));
app.use(express.static(`${__dirname}/public`));

//ROUTES

app.use('/', indexRouter);
app.all('*', (req, res, next) => {
    res.render('error');
});

module.exports = app;