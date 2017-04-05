var mongoose = require('mongoose');
var config = require('config');

module.exports = function(app) {

  mongoose.set('debug', config.dbdebug);
  
  mongoose.connect(config.dburl, config.dbconf);

  mongoose.connection.on('disconnected',  () => {
    console.log('Mongoose:: Desconected.');
  });

  mongoose.connection.on('error',  (erro) => {
    console.log('Mongoose:: Conection error, ' + erro);
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Mongose:: Desconected.');
      process.exit(0);
    });
  });

  return mongoose;
};