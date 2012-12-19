var mongoose = require('mongoose');

mongoose.connect('127.0.0.1', 'halfpotion');

var Schema = mongoose.Schema
  , ObjectID = Schema.ObjectID;

// -----------------------------------------------------------------------------
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log(":: Connected to the Database ::");
});
// -----------------------------------------------------------------------------

var schema = {};

schema.Stats = {
  hp: Number,
  mp: Number,
  stamina: Number,
  strength: Number,
  intelligence: Number,
  agility: Number,
  dexterity: Number,
  vitality: Number,
  luck: Number
};

schema.Class = mongoose.Schema({
  name: String,
  description: String,
  default_stats: schema.Stats
});

schema.Race = mongoose.Schema({
  name: String,
  description: String,
  default_stats: schema.Stats
});

schema.StaticItem = mongoose.Schema({
  name: String,
  description: String
});

schema.ConsumableItem = mongoose.Schema({
  name: String,
  description: String,
});

schema.User = mongoose.Schema({
  name: String,
  password: String,
  age: Number,
  default_stats: schema.Stats
});

module.exports = schema;