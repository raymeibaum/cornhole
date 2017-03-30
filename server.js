const express = require('express');
const app = express();
const pug = require('pug');

const usersController = require('./controllers/users');
const gamesController = require('./controllers/games');
const liveController = require('./controllers/live');


app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use('/users', usersController);
app.use('/games', gamesController);
app.use('/live', liveController);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
