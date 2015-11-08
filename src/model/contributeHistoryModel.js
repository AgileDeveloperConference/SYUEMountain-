
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var uriUtil = require('mongodb-uri');

// DB stuff
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };       
var mongodbUri = 'mongodb://tony:tony123@ds045464.mongolab.com:45464/agilemount';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);



if(mongoose.connection.readyState == 0){
  mongoose.connect(mongooseUri, options);
}

module.exports = mongoose.model('ContributeHistory',new Schema({
		fbUID : String,
		contributeValue : Number,
		roadId : Number,
		DateStart:Number,
		DateEnd :Number,
		isSuccess:Boolean
}));