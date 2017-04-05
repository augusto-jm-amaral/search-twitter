'use strict';

const app = require('./app');
const port = process.env.PORT || 3000;
const server = app.listen(port);

server.on('listening', () =>
  console.log(`Twitter Stream application started on ${port}`)
);