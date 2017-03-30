const express = require('express');
const app = express();
const pug = require('pug');

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
    socket.on('adjust-score', function(id) {
      switch (id) {
        case 'black-plus' :
          io.emit('black-plus');
          break;
        case 'black-minus' :
          io.emit('black-minus');
          break;
        case 'red-plus' :
          io.emit('red-plus');
          break;
        case 'red-minus' :
          io.emit('red-minus');
          break;
      }
    })
  });

app.get('/', function(req, res) {
  res.render(__dirname + '/views/live/score.pug');
})

app.get('/admin', function(req, res) {
  res.render(__dirname + '/views/live/admin.pug');
})

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

const port = process.env.PORT || 3000;
http.listen(port, console.log(`listening on port: ${port}`));
