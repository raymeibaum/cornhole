const socket = io();
const $upNextContainer = $('div.well-container');

function adjustScore(event) {
  socket.emit('adjust-score', event.target.id);
}

function resetScores() {
	socket.emit('reset-scores');
}

function shiftList() {
	socket.emit('shift-list');
}

function incrementMillie() {
  socket.emit('increment-millie');
}

socket.on('signup-list', function(list) {
  $upNextContainer.empty();
  list.forEach(function(team) {
    $upNextContainer.append(`<div class="well"><strong>${team.teammate1} and ${team.teammate2}</strong></div>`)
  });
});

$(function() {
	socket.emit('get-signup-list');
  $('div.jumbotron').on('click', 'button', adjustScore);
  $('button#clear-scores').on('click', resetScores);
  $('button#shift-list').on('click', shiftList);
  $('button#increment-millie').on('click', incrementMillie);
});
