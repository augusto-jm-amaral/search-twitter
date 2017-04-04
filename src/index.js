'use strict';

const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

console.log('Porta:' + port);

server.on('listening', () =>
  console.log(`Twitter Stream application started on ${app.get('host')}:${port}`)
);