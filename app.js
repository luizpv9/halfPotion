var express = require('express');
var app = express();
var server = require('http').createServer(app);
// -- 
var io = require('socket.io').listen(server);
// --
var actions = require('./actions');
// --
server.listen(process.env.PORT || 2222);
// --
app.use(express.bodyParser());
app.use(express.static(__dirname + "/public"));
app.set('views', __dirname + '/views')
app.set('view engine', 'jade');
app.set('view options', {pretty: true});
// --
var models = require('./models');

// ---------- ROOT ----------------------------------
app.get('/', function(req, res) 
{
  res.send("ho");
});


// ---------- PLAY ----------------------------------
app.get('/play', function(req, res) 
{
  res.render('play');
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



// SOCKET.IO // SOCKET.IO // SOCKET.IO // SOCKET.IO //

var users = [];

io.sockets.on('connection', function(socket) {

  socket.stage = 0;

  socket.on('sendData', function(data) {
    console.log("RECIEVED DATAAAA");
    for(var command in actions) {
      if(data.indexOf(command) != -1) {
        socket.emit('updateContent', actions[command].example);
      }
    }
  });
});