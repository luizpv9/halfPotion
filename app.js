var socket = require('socket.io');
var express = require('express');
var models = require('./models');

var app = express();

app.get('/', function(req, res) 
{
  res.send("ho"); 
});
