const socket = io();

const $redScore = $('h1#red-score');
const $blackScore = $('h1#black-score');
const $millieCount = $('h1#millie-count');
const $upNextContainer = $('div.well-container');

socket.on('current-score', function(scores) {
  $blackScore.text(scores.black);
  $redScore.text(scores.red);
});

socket.on('signup-list', function(list) {
  $upNextContainer.empty();
  list.forEach(function(team) {
    $upNextContainer.append(`<div class="well"><strong>${team.teammate1} and ${team.teammate2}</strong></div>`)
  });
});

socket.on('current-millie', function(millieCount) {
  $millieCount.text(millieCount);
});

$(function() {
  socket.emit('get-millie');
	socket.emit('get-score');
	socket.emit('get-signup-list');
})
