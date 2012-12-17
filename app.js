var socket = require('socket.io');
var express = require('express');
var models = require('./models');

var app = express();

// ---------- ROOT ----------------------------------
app.get('/', function(req, res) 
{
	res.send("ho");
});


// ---------- PLAY ----------------------------------
app.get('/play', function(req, res) 
{
	res.send("ho");
});


// ---------- DETAILS -------------------------------
app.get('/details', function(req, res) 
{
	res.send("ho");
});


// ---------- CREATE --------------------------------
app.get('/create', function(req, res) 
{
	res.send("ho");
});
