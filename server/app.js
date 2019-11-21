const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')



const app = express();

const users = require('./api/users')
const auth = require('./auth')



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('daisy_bloodh@und'));
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}))

app.use('/auth', auth)
app.use('/api/v1/users', users)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
});

// error handler
app.use(function(err, req, res, next) {

  res.status(err.status || 500);
  res.json({
    message: 'error',
    error: req.app.get('env') === 'development' ? err : {}
  })
});

module.exports = app;
