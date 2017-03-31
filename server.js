const express = require('express');
const app = express();
const pug = require('pug');

const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

let scores = {
  red: 0,
  black: 0
}

let upNext = [];

let laughCount = 0;

io.on('connection', function(socket){
  socket.on('adjust-score', function(id) {
    switch (id) {
      case 'black-plus' :
        scores.black++;
        break;
      case 'black-minus' :
        scores.black--;
        break;
      case 'red-plus' :
        scores.red++;
        break;
      case 'red-minus' :
        scores.red--;
        break;
    }
    io.emit('current-score', scores);
  });

  socket.on('get-score', function() {
    io.emit('current-score', scores)
  });

  socket.on('reset-scores', function() {
    scores.red = 0;
    scores.black = 0;
    io.emit('current-score', scores);
  });

  socket.on('get-signup-list', function() {
    io.emit('signup-list', upNext)
  });

  socket.on('signup', function(newTeam) {
    upNext.push({
      teammate1: newTeam.teammate1,
      teammate2: newTeam.teammate2
    });
    io.emit('signup-list', upNext)
  });

  socket.on('shift-list', function() {
    if (upNext.length >= 1) {
      upNext.shift();
    }
    io.emit('signup-list', upNext);
  });

  socket.on('get-millie', function() {
    io.emit('current-millie', laughCount);
  });

  socket.on('increment-millie', function() {
    laughCount++;
    io.emit('current-millie', laughCount);
  });
});


app.get('/', function(req, res) {
  res.render(__dirname + '/views/main.pug');
});

app.get('/score', function(req, res) {
  res.render(__dirname + '/views/score.pug');
});

app.get('/admin', function(req, res) {
  res.render(__dirname + '/views/admin.pug');
});

app.get('/signup', function(req, res) {
  res.render(__dirname + '/views/signup.pug');
});

app.get('/:catchall', function(req, res) {
  res.redirect('/');
});

const port = process.env.PORT || 3000;
http.listen(port, console.log(`listening on port: ${port}`));
