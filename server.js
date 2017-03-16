const express = require('express');
const app = express();
const fs = require('fs');

const hbs = require('hbs');
app.set('view engine', 'hbs');

hbs.registerPartial('scoreboard', fs.readFileSync(__dirname + '/views/scoreboard.hbs', 'utf8'));
hbs.registerPartial('signup', fs.readFileSync(__dirname + '/views/signup.hbs', 'utf8'));
hbs.registerPartial('next', fs.readFileSync(__dirname + '/views/next.hbs', 'utf8'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('main');
});
app.get('/next', (req, res) => {
  res.render('next');
});
app.get('/signup', (req, res) => {
  res.render('signup');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port: ${port}`));
