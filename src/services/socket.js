'use strict';

const conf  = require('./twitter.json');
      tweet = require('node-tweet-stream')(conf);

module.exports = function (app) {

  tweet.track('socket.io');

  tw.track('javascript');
  
  tw.on('tweet', function(tweet){
    app.io.emit('tweet', tweet);
  });
  
  // const User = app.libs.db.models.User;

 //  app.route('/user/:_id')
 //    .get(function(req, res){

 //      req.checkParams('_id', '').notEmpty().isMongoId();

 //      var erros = req.validationErrors();

 //      if(!erros){

 //        User.findOne({ _id: req.params._id })
 //          .select({
 //            _id: 1,
 //            name: 1,
 //            email: 1
 //          }).then(function(user){
          
 //            if(user)
 //              res.status(200).json(user).end();
 //            else
 //              res.sendStatus(404).end();

 //          }).catch(function(err){
 //            res.sendStatus(412).end();
 //          });

 //      }else{
 //        res.sendStatus(400).end();

 //      }
 //    });
}