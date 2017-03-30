const express = require('express');
const router = express.Router();

router.get('/score', function(req, res) {
  res.render('live/score.pug' , {
    title: 'Scoreboard'
  });
});

router.get('/admin', function(req, res) {
  res.render('live/admin.pug', {
    title: 'Admin'
  });
});

module.exports = router
