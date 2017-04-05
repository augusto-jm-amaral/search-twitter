'use strict';

const app              = require('express')(),
      server           = require('http').createServer(app),
      io               = require('socket.io'), 
      consign          = require('consign'),
      express          = require('express'),
      path             = require('path'),
      bodyParser       = require('body-parser'),
      helmet           = require('helmet'),
      cors             = require('cors'),
      config           = require('config'),
      expressValidator = require('express-validator'),
      favicon          = require('serve-favicon'),
      morgan           = require('morgan'),
      compress         = require('compression');

app.set('public','./public')
   .use(compress())
   .options('*', cors())
   .use(cors())
   .use(favicon( path.join(app.get('public'), 'favicon.ico') ))
   .use(helmet())
   .use(bodyParser.json())
   .use(bodyParser.urlencoded({ extended: true }))
   .use(express.static(app.get('public')));

const socketServer = io(server);

app.io = socketServer;
app.use(function(req, res, next) {
  req.io = socketServer;
  next();
});

consign({
    verbose: true,
    cwd: 'src'
  })
  .then('middlewares/db.js')
  // .then('models')
  .then('services')
  .into(app);

module.exports = server;